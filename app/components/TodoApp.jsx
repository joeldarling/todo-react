const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

/**
 * App Components
 */
const TodoList = require('TodoList');
const AddTodo = require('AddTodo').default;
const TodoSearch = require('TodoSearch').default;

const TodoApp = React.createClass({
  render: function(){

      return (
        <div>
          <h1 className="page-title">Todo App</h1>
          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <TodoSearch/>
                <TodoList/>
                <AddTodo/>
              </div>
            </div>
          </div>
        </div>
      );
  }
});


module.exports = TodoApp;
