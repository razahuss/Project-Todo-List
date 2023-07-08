
class todoList {
    constructor(list){
        this.list = list;
    }

    get getList(){
        return this.list;
    }

    set setList(newList){
        this.list = newList;
    }

    add(todo){
        this.list.push(todo);
    }

    remove(todo){
        let rmIndex = this.list.indexOf(todo);
        this.setList(this.list.splice(rmIndex,1));
    }
}

export{
    todoList
};