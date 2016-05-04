import { PropTypes } from 'react';
import { Record } from 'immutable';

export const UNSTARTED  = 1;
export const PROCESSING = 2;
export const DONE       = 3;

const defaultValues = {
  id: undefined,
  user: undefined,
  userId: undefined,
  body: '',
  status: UNSTARTED,
};

export const TodoType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  isUnstarted: PropTypes.bool.isRequired,
  entityId: PropTypes.string.isRequired,
})

export default class Todo extends Record(defaultValues) {
  get isDone() {
    return this.status === DONE;
  }

  get isProcessing() {
    return this.status === PROCESSING;
  }

  get isUnstarted() {
    return this.status === UNSTARTED;
  }

  get entityId() {
    return `todo:${this.id}`;
  }
}
