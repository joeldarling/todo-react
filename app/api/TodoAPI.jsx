module.exports = {

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
