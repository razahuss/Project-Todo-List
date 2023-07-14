import { todo } from "./todos";
import { todoList } from "./todoList";
import { task } from "./tasks";
//import { taskList } from "./tasks";
import { displayTodaysTasks } from "./today";
import { displayWeeksTasks } from "./week";
import { addProject } from "./projects";
import { projectList } from "./projects";

const container = document.querySelector('.container');
const projectContainer = document.querySelector('.projects');
const formParentD = document.querySelector('.formParentDiv');

//const todayList = taskList; 
const allProject = projectList;
const todayList = [];
const inboxbtn = document.getElementById('inbox').addEventListener('click', ()=>{task(container, 'Inbox', todayList);});
const todaybtn = document.getElementById('today').addEventListener('click', ()=>{displayTodaysTasks(container, 'Today', todayList);});
const weekbtn = document.getElementById('week').addEventListener('click', ()=>{displayWeeksTasks(container, 'Week', todayList);});

const addProjectBtn = document.getElementById('add-project').addEventListener('click', ()=>{addProject(formParentD, projectContainer);});

