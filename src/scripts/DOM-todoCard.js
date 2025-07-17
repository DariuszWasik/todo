import '../styles/todoCard.css'
import { changeFinishedByCheckBox } from './finishTodo';
import { allTodosArr, putAllTodosInAllTodosArray } from './todo';


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
 
 lowerText.append(todoDescription);
 
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
    changeFinishedByCheckBox();

}