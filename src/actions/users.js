import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';
import { normalize, arrayOf } from 'normalizr';
import UserSchema from '../schemas/users';

const schema = {
  users: arrayOf({
    user: UserSchema
  })
};

const fetchUsersAction = createAction('FETCH_USERS', (result, entities) => { return {result, entities}; });

export function fetchUsers(getState) {
  return (dispatch, getState) => {
    fetch('/users.json').then((res) => {
      return res.json();
    }).then((json) => {
      const { result, entities } = normalize(json, schema);
      return dispatch(fetchUsersAction(result, entities));
    });
  };
}
