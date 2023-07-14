import { todoList } from "./todoList";
import { todo } from "./todos";

//const taskList = [];

const task = (parent,name, taskList) => {
    parent.innerHTML = "";

    const listName = document.createElement('p');
    listName.innerHTML = name;
    parent.appendChild(listName);

    const viewListDiv = document.createElement('div');
    parent.appendChild(viewListDiv);

    const addTask = document.createElement('button');
    addTask.innerHTML = '+Add Task';
    addTask.addEventListener('click', ()=>{addTaskPopUp();});
    parent.appendChild(addTask);
 
    const popupDiv = document.createElement('div');
    parent.appendChild(popupDiv);
    
    const viewListfunc = (list) => {
        viewListDiv.innerHTML = "";
        for(let i = 0; i < list.length; i++){
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = list[i].getDescription + "   " + list[i].getDueDate;
            viewListDiv.appendChild(item);

            item.addEventListener('click', ()=>{
                let deleteIndex = taskList.indexOf(taskList[i]);
                taskList.splice(deleteIndex, 1);
                viewListfunc(taskList); 
                console.log('removed');     
            });
        }
    }

    viewListfunc(taskList);

    const addTaskPopUp = () => {
        popupDiv.innerHTML = "";
        
        const form = document.createElement('form');
        popupDiv.appendChild(form);

        const input = document.createElement('input');
        input.setAttribute("type", "text");
        form.appendChild(input);

        const date = document.createElement('input');
        date.setAttribute('type', 'date');
        form.appendChild(date);
        
        const submitTaskFunc = (event) => {
            let taskName = input.value;
            let taskDate = date.value;
            let newTodo = new todo(taskName, taskDate);
            taskList.push(newTodo);
            console.log(taskList);
            popupDiv.innerHTML = "";
            viewListfunc(taskList);
            event.preventDefault();
        }

        const submitTask = document.createElement('button');
        submitTask.innerHTML = "add";
        submitTask.addEventListener('click', (event)=>{submitTaskFunc(event);});
        form.appendChild(submitTask)

    }
}

export{
    task
};