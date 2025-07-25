import { allTodosArr } from "./todo";
import { projectsArr } from "./project";
import { render } from "./render";

const header = document.querySelector('.main-header')

export {removeTodoFunc }


function removeTodoFunc() {
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
render();
}
)
})}

    

function updatingProjectsTodosAfterRemovingTodo(ID) {
 const updatedTodosArr =  allTodosArr.filter(a => a.projectID == ID);
 console.log (updatedTodosArr, 'updatedTodosArr')
 projectsArr[ID].todos = updatedTodosArr;
console.log(projectsArr[ID].todos, 'todosy tego projectu')
}