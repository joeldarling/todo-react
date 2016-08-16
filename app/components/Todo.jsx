const React = require('react');

const Todo = React.createClass({
  render: function(){

    const { text, id, completed } = this.props;

    return (
      <div onClick={()=>{this.props.handleToggle(id);}}>
        <input type="checkbox" checked={completed} onChange={()=>{}}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
