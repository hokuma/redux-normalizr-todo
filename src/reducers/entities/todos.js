import { handleActions } from 'redux-actions';
import Immutable from 'immutable'
import _ from 'lodash';
import Todo from '../../models/todo';

function merge(state, action) {
  const payload = action.payload;
  return _.reduce(_.mapValues(payload.entities.todos), (res, value) => {
    const entityId = (new Todo(value)).entityId;
    return res.update(entityId, new Todo(), (current) => {
      return current.merge(value);
    });
  }, state);
}

const handlers = {
  FETCH_TODOS: merge,
  CREATE_TODO: merge,
};

const initialState = Immutable.Map();

export default handleActions(handlers, initialState);
