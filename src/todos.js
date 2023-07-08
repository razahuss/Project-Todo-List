
class todo{
    constructor(description, dueDate){
        this.description = description;
        this.dueDate = dueDate;
    }

    get getDescription(){
        return this.description;
    }

    get getDueDate(){
        return this.dueDate;
    }

    set setDescription(newDescription){
        this.description = newDescription;
    }

    set setDueDate(newDueDate){
        this.dueDate = newDueDate;
    }
}

export{
    todo
};