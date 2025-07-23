import '../styles/todoCard.css'
import { allTodosArr, putAllTodosInAllTodosArray } from './todo';
import { giveTodoCardButtonsFunctionality } from './todoCardActions';



export { container, createTodoCard, displayTodoCard, displayAllTodos}

const container = document.querySelector('.display-projects');

function createTodoCard(todo) {
 const todoCard = document.createElement('div');
 todoCard.className = 'todo-card';
 const upperText = document.createElement('div')
 upperText.className = 'todo-upper-text'
 const lowerText = document.createElement('div')
 lowerText.className = 'todo-lower-text'
 
 //do checkboxa trzeba napisac jakis skryp zmieniajacy status todosa w wykonane (dodac do todo.js w classie)
 const checkBox = document.createElement('input')
 checkBox.className = 'finished';
 checkBox.name = todo.todoID;
 checkBox.type = 'checkbox';
 if(todo.finished == true){
    checkBox.checked = true
 }
 else checkBox.checked = false
 
 const todoName = document.createElement('p');
 todoName.className = 'todo-name';
 todoName.textContent = todo.name;
 const todoPriority = document.createElement('div');
 todoPriority.className = 'todo-priority';
 todoPriority.textContent = todo.priority;
 const todoDueDate = document.createElement('div');
 todoDueDate.className = 'todo-date';
 todoDueDate.textContent = todo.dueDate;
 
 upperText.append(checkBox, todoName, todoPriority, todoDueDate)

 const todoDescription = document.createElement('p');
 todoDescription.className = 'todo-description';
 todoDescription.textContent = todo.description;
 
 const manipulationButtons = document.createElement('div');
 manipulationButtons.className = 'manipulation-buttons-todo';


 const trashCanTodo = document.createElement('div');
 trashCanTodo.className = 'trash-can-todo';
 trashCanTodo.name = todo.todoID;
 trashCanTodo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' ><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;

const editTodo = document.createElement('div');
editTodo.className = 'edit-todo';
editTodo.name = todo.todoID;
editTodo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' ><title>note-edit-outline</title><path d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z" /></svg>`;

 manipulationButtons.append(editTodo, trashCanTodo)


 lowerText.append(todoDescription, manipulationButtons);
 
 todoCard.append(upperText, lowerText);
 
 displayTodoCard(todoCard)
 
}

function displayTodoCard(todo){
    container.append(todo)
}


function displayAllTodos() {
    putAllTodosInAllTodosArray(); 
    console.log(allTodosArr, 'alltodosarr')
    allTodosArr.forEach(a => createTodoCard(a))
    giveTodoCardButtonsFunctionality()

}