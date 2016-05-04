import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTodo } from '../actions/todos';
import UserList from './user_list';
import TextForm from './text_form';

class TodoForm extends Component {
  onClick() {
    const body = this.refs.input.value;
    const userEntityId = this.refs.owner.getWrappedInstance().value;
    this.props.onClick(body, userEntityId);
  }

  onSelect(selectedUserEntityId) {
    this.setState({selectedUserEntityId});
  }

  render() {
    return (
      <div className='todo-form'>
        <UserList ref='owner'/>
        <input ref='input' type='text'/>
        <button onClick={this.onClick.bind(this)}>Save</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClick: createTodo,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
