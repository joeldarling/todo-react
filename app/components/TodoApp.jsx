import React from 'react';
import * as Redux from 'react-redux';
/**
 * App Components
 */
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export const TodoApp = React.createClass({
  onLogout(e) {
    const {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render() {

      return (
        <div>
          <div className="page-actions">
            <a href="#" onClick={this.onLogout}>Log out</a>
          </div>
          <h1 className="page-title">Todo Apps</h1>
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


export default Redux.connect()(TodoApp);
