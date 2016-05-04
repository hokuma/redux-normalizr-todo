import { combineReducers } from 'redux';

import todos from './todos';
import users from './users';

export const reducers = {
  todos,
  users,
};

export default combineReducers(reducers);
