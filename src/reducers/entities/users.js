import { handleActions } from 'redux-actions';
import Immutable from 'immutable'
import _ from 'lodash';
import User from '../../models/user';

function merge(state, action) {
  const payload = action.payload;
  return _.reduce(_.mapValues(payload.entities.users), (res, value) => {
    const entityId = (new User(value)).entityId;
    return res.update(entityId, new User(), (current) => {
      return current.merge(value);
    });
  }, state);
}

const handlers = {
  FETCH_TODOS: merge
};

const initialState = Immutable.Map();

export default handleActions(handlers, initialState);
