import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todos';
import Todo from './todo';
import TodoForm from './todo_form';


class TodoList extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className='.todo-list'>
        <TodoForm/>
        <ul>
          {this.props.todos.map((entityId) => { return <Todo key={entityId} entityId={entityId}/>; })}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: ImmutablePropTypes.orderedSet.isRequired
};

function mapStateToProps(state) {
  const todos = state.todos.get('todos');
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTodos,
  }, dispatch);
};

//export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
