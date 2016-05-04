import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/users';


class UserList extends Component {
  get value() {
    return this.refs.selector.value;
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className='.user-list' style={{display: 'inline-block'}}>
        <select ref='selector'>
          {this.props.users.map((user) => {
            const props = {
              key: user.entityId,
              value: user.entityId,
            };
            return <option {...props}>{user.name}{user.isBusy ? ':Busy' : ''}</option>;
          })}
        </select>
      </div>
    )
  }
}

UserList.propTypes = {
  users: ImmutablePropTypes.orderedSet.isRequired,
  fetchUsers: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return { users: state.users.get('users').map((entityId) => { return state.entities.users.get(entityId); }) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUsers,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  {withRef: true}
)(UserList);
