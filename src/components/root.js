import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import TodoList from './todo_list';

const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducers);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList/>
      </Provider>
    );
  }
}
