const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({

  render: function(){
    const {todos} = this.props;

    if (todos.length === 0) {
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }
    
    const renderTodos = ()=>{
      return todos.map((todo)=>{
        return <Todo key={todo.id} {...todo} handleToggle={this.props.handleToggle}/>;
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );

  }
});

module.exports = TodoList;
