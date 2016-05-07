import { PropTypes } from 'react';
import { Record } from 'immutable';

export const INIT  = 1;
export const DONE  = 2;

const defaultValues = {
  id: undefined,
  user: undefined,
  userId: undefined,
  body: '',
  status: INIT,
};

export const TodoType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  entityId: PropTypes.string.isRequired,
})

export default class Todo extends Record(defaultValues) {
  get isDone() {
    return this.status === DONE;
  }

  get entityId() {
    return `todo:${this.id}`;
  }
}
