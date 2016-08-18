const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  render: function(){

    const { text, id, completed, createdAt, completedAt } = this.props;

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
      <div onClick={()=>{this.props.handleToggle(id);}}>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
