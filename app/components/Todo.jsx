const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

const moment = require('moment');

const Todo = React.createClass({
  render: function(){

    const { text, id, completed, createdAt, completedAt, dispatch } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    const renderDate = () =>{
      let message = 'Created ';
      let timestamp = createdAt;

      if(completed){
        message = 'Completed at ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={()=>{
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={completed} onChange={()=>{}}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>

      </div>
    );
  }
});

module.exports = connect()(Todo);
