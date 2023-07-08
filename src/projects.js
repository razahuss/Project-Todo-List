
class project{
    constructor(todoList){
        this.todoList = todoList;
    }

    get getTodoList(){
        return this.todoList
    }

    set setTodoDoList(newToDoList){
        this.todoList = newToDoList;
    }
}

export{
    project
};