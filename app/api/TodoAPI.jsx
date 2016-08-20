module.exports = {
  setTodos: function(todos){
    if(Array.isArray(todos) && todos.length > 0){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

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
    filteredTodos = filteredTodos.filter((todo)=>{
      return searchText.length === 0 || todo.text.indexOf(searchText) > -1;
    });
    //sort todos with non complete first
    filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      } else if (a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });
    return filteredTodos;
  }
};
