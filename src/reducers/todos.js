import { handleActions } from 'redux-actions';
import Immutable from 'immutable'

function merge(state, action) {
  const payload = action.payload;
  return state.update('todos', (current) => {
    if(payload.result.todos) {
      const entityIds = payload.result.todos.map((value) => { return value.todo; })
      return current.union(entityIds);
    } else if(payload.result.todo) {
      const entityId = payload.result.todo;
      return current.union([entityId]);
    }
  });
}

const handlers = {
  FETCH_TODOS: merge,
  CREATE_TODO: merge,
};

const initialState = Immutable.Map({
  todos: Immutable.OrderedSet(),
});

export default handleActions(handlers, initialState);
