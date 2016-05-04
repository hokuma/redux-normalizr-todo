import { handleActions } from 'redux-actions';
import Immutable from 'immutable'

function merge(state, action) {
  const payload = action.payload;
  return state.update('users', (current) => {
    const entityIds = payload.result.users.map((value) => { return value.user; })
    return current.union(entityIds);
  });
}

const handlers = {
  FETCH_USERS: merge,
};

const initialState = Immutable.Map({
  users: Immutable.OrderedSet(),
});

export default handleActions(handlers, initialState);
