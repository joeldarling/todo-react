const React = require('react');

const AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

    const todoText = this.refs.todoText.value;
    
    if(todoText.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="New todo item"></input>
          <button className="button expanded"> Add </button>
        </form>

      </div>
    );
  }

});

module.exports = AddTodo;
