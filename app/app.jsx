const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');

const TodoApp = require('TodoApp');
const store = require('configureStore').configure();
const actions = require('actions');
const TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
