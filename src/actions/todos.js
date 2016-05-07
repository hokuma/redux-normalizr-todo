import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { normalize, arrayOf } from 'normalizr';
import TodoSchema from '../schemas/todos';

const schema = {
  todos: arrayOf({
    todo: TodoSchema
  })
};

const fetchTodosAction = createAction('FETCH_TODOS', (result, entities) => { return {result, entities}; });
const createTodoAction = createAction('CREATE_TODO', (result, entities) => { return {result, entities}; });
const finishTodoAction = createAction('FINISH_TODO', (entityId) => { return {entityId}; });

export function fetchTodos(getState) {
  return (dispatch, getState) => {
    fetch('/todos.json').then((res) => {
      return res.json();
    }).then((json) => {
      const { result, entities } = normalize(json, schema);
      return dispatch(fetchTodosAction(result, entities));
    });
  };
}

export function createTodo(body, ownerEntityId) {
  return (dispatch, getState) => {
    const user = getState().entities.users.get(ownerEntityId);
    fetch('/todos.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({body, userId: user.id})
    }).then((res) => {
      return res.json();
    }).then((json) => {
      const { result, entities } = normalize(json, {todo: TodoSchema});
      return dispatch(createTodoAction(result, entities));
    })
  };
}

export function finishTodo(entityId) {
  return (dispatch, getState) => {
    const todo = getState().entities.todos.get(entityId);
    fetch(`/todos/${todo.get('id')}.json`, {
      method: 'PUT',
      headers: {
        'Content-TYpe': 'application/json'
      },
      body: JSON.stringify({status: 2})
    }).then((res) => {
      return dispatch(finishTodoAction(entityId));
    })
  };
}
