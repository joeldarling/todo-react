const React = require('react');
const {connect} = require('react-redux');
const Todo = require('Todo');
const TodoAPI = require('TodoAPI');

const TodoList = React.createClass({

  render: function(){
    const {todos, showCompleted, searchText} = this.props;

    if (todos.length === 0) {
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }

    const renderTodos = () => {
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
        return <Todo key={todo.id} {...todo} />;
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );

  }
});

module.exports = connect(
  (state) => state

)(TodoList);
