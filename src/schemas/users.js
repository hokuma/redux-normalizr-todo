import { Schema } from 'normalizr';
import User from '../models/user';

export default new Schema(
  'users',
  { idAttribute: (entity) => new User(entity).entityId }
);
