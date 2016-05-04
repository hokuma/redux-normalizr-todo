import { Schema } from 'normalizr';
import UserSchema from './users';
import Todo from '../models/todo';

const schema = new Schema(
  'todos',
  { idAttribute: (entity) => new Todo(entity).entityId }
);

schema.define({
  user: UserSchema
});
export default schema;
