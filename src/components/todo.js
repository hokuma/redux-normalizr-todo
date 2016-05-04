import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TodoType } from '../models/todo';

class Todo extends Component {
  render() {
    return <li>{this.props.user.name}:{this.props.todo.body}</li>;
  }
}

Todo.propTypes = {
  todo: TodoType.isRequired,
};

function mapStateToProps(state, ownProps) {
  const todo = state.entities.todos.get(ownProps.entityId);
  const user = state.entities.users.get(todo.user);
  return { todo, user };
}

export default connect(mapStateToProps)(Todo);
