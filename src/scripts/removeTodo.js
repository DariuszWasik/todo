import { allTodosArr } from "./todo";
import {displayAllByDates, displayTodayTasks, displayImportant, displayWeek, displayOverdue} from './navigationButtons'
import { projectsArr } from "./project";
import { projectsNamesArr } from "./DOM-all-projects-container";
import { displayProjectsTodos } from "./projectBtnDisplayTodos";

const header = document.querySelector('.main-header')

export function removeTodoFunc() {
const removeTodoBtn = document.querySelectorAll('.trash-can-todo');
removeTodoBtn.forEach(trash => { 
    trash.addEventListener('click', ()=>{
console.log(allTodosArr, 'z removeTodoFunc')
console.log(trash.name, 'trashname')
const clickedTrash = allTodosArr.filter(a => a.todoID == trash.name);
console.log(clickedTrash)
const todoToRemove = clickedTrash[0];
console.log(clickedTrash[0].projectID, 'trashProjectID')
todoToRemove.removeTodo();
console.log(header.textContent)
updatingProjectsTodosAfterRemovingTodo(clickedTrash[0].projectID)
renderAfterRemoving();
}
)
})}

function renderAfterRemoving() {
    console.log(projectsArr)
    if(projectsNamesArr.includes(header.textContent.trim())){
        console.log('yesYYYYYYYYYYYYYYYYYYYYYYYYYYY')
        const id = projectsNamesArr.indexOf(header.textContent.trim())
        console.log(id, 'its id nr in arr')
        console.log(projectsArr[id], 'project with this id');
        displayProjectsTodos(projectsArr[id])
    }
    else {
    switch (header.textContent) {
        case 'All':
            displayAllByDates();
            break;
        case 'Today':
            displayTodayTasks();
            break;
        case '7 Days':
            displayWeek();
            break;
        case 'Overdue':
            displayOverdue();
            break;
        case 'Important':
            displayImportant();
            break;
    }
}
    
}

function updatingProjectsTodosAfterRemovingTodo(ID) {
 const updatedTodosArr =  allTodosArr.filter(a => a.projectID == ID);
 console.log (updatedTodosArr, 'updatedTodosArr')
 projectsArr[ID].todos = updatedTodosArr;
console.log(projectsArr[ID].todos, 'todosy tego projectu')
}