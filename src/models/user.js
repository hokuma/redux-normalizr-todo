import { PropTypes } from 'react';
import { Record } from 'immutable';

export const BUSY = 1;
export const IDLE = 0;

const defaultValues = {
  id: undefined,
  name: '',
  status: IDLE,
};

export const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  isBusy: PropTypes.bool.isRequired,
})

export default class User extends Record(defaultValues) {
  get isBusy() {
    return this.status === BUSY;
  }

  get entityId() {
    return `user:${this.id}`;
  }
}
