import { allTodosArr } from "./todo";
import {displayAllByDates, displayTodayTasks, displayImportant, displayWeek, displayOverdue} from './navigationButtons'



const header = document.querySelector('.main-header')

export function removeTodoFunc() {
const removeTodoBtn = document.querySelectorAll('.trash-can-todo');
removeTodoBtn.forEach(trash => { 
    trash.addEventListener('click', ()=>{
console.log(allTodosArr, 'z removeTodoFunc')
console.log(trash.name)
const clickedTrash = allTodosArr.filter(a => a.todoID == trash.name);
console.log(clickedTrash)
const todoToRemove = clickedTrash[0];
console.log(clickedTrash[0])
todoToRemove.removeTodo();
console.log(header.textContent)
renderAfterRemoving();
}
)
})}

function renderAfterRemoving() {
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