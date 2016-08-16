module.exports = {
  setTodos: function(todos){
    if(Array.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
      console.log('JSON parse error:', e);
    }
    return Array.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText){
    let filteredTodos = todos;

    ///filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });
    // filter by searchText

    //sort todos with non complete first
    return filteredTodos;
  }
};
