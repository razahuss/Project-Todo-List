import { task } from "./tasks";

let projectList = [];
const container = document.querySelector('.container');

const addProject = (formParent, projectParent) => {
    formParent.innerHTML = "";

    const form = document.createElement('form');
    formParent.appendChild(form);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    form.appendChild(input);

    const addProject = document.createElement('button');
    addProject.innerHTML = "Add";
    form.appendChild(addProject);
    
    addProject.addEventListener('click', (event)=>{
        const newProjbtn = document.createElement('button');
        newProjbtn.innerHTML = input.value;
        const arr = [];
        newProjbtn.addEventListener('click', ()=>{task(container, input.value, arr);});
        projectParent.appendChild(newProjbtn);
        projectList.push(newProjbtn);
        formParent.innerHTML = "";
        event.preventDefault();
    });
}

export{
    addProject, projectList
};