import { todo } from "./todos";
import { todoList } from "./todoList";
import { project } from "./projects";
import { task } from "./tasks";
//main list to add events
const list = new todoList(new Array());

const container = document.querySelector('.container');

const inboxbtn = document.getElementById('inbox').addEventListener('click', ()=>{task(container, 'Inbox');});

/**checks the dates of each list item and
 * adds it to this list
 */
const todayList = []; 

/**
 * checks the dates of each list item and 
 * if it falls under this week it's added
 * to this list
 */
const weekList = [];

/*when someone adds a new project it should
show up here*/
const projectsList = [];

/*need a function for when someone clicks a button
for a new todo item to add to a list*/

/*need a function for when someone wants 
to click a button to remove a list item*/ 


/*need a function when someone clicks a button
for a new project to show up and in that 
project section there should be a new 
empty todoList*/

