import { handleActions } from 'redux-actions';
import Immutable from 'immutable'
import _ from 'lodash';
import Todo, { DONE } from '../../models/todo';

function merge(state, action) {
  const payload = action.payload;
  return _.reduce(_.mapValues(payload.entities.todos), (res, value) => {
    const entityId = (new Todo(value)).entityId;
    return res.update(entityId, new Todo(), (current) => {
      return current.merge(value);
    });
  }, state);
}

function finish(state, action) {
  const entityId = action.payload.entityId;
  return state.update(entityId, (todo) => {
    return todo.set('status', DONE);
  });
}

const handlers = {
  FETCH_TODOS: merge,
  CREATE_TODO: merge,
  FINISH_TODO: finish,
};

const initialState = Immutable.Map();

export default handleActions(handlers, initialState);
