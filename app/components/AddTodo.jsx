const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

    const todoText = this.refs.todoText.value;
    const {dispatch} = this.props; 
    if(todoText.length > 0){
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="New todo item"></input>
          <button className="button expanded"> Add </button>
        </form>
      </div>
    );
  }

});

export default connect()(AddTodo);
