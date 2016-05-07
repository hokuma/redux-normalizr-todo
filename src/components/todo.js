import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TodoType } from '../models/todo';
import { finishTodo } from '../actions/todos';

class Todo extends Component {
  onClickDone() {
    this.props.onClickDone(this.props.todo.entityId);
  }

  renderTodo() {
    return <li>{this.props.user.name}:{this.props.todo.body} <button onClick={this.onClickDone.bind(this)}>Done</button></li>;
  }

  renderFinishedTodo() {
    return <li><s>{this.props.user.name}:{this.props.todo.body}</s></li>;
  }

  render() {
    console.log(this.props.todo.status);
    console.log(this.props.todo.isDone);
    return this.props.todo.isDone ? this.renderFinishedTodo() : this.renderTodo();
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickDone: finishTodo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
