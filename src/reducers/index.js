import { combineReducers } from 'redux';

import entities from './entities';
import todos from './todos';
import users from './users';

export const reducers = {
  entities,
  todos,
  users,
};

export default combineReducers(reducers);
