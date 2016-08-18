const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  render: function(){

    const { text, id, completed, createdAt, completedAt } = this.props;
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
      <div className={todoClassName} onClick={()=>{this.props.handleToggle(id);}}>
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

module.exports = Todo;
