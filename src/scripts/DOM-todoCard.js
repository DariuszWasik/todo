import { projectsArr } from "./project";

const container = document.querySelector('.main');

function createTodoCard(todo) {
 const todoCard = document.createElement('div');
 todoCard.className = 'todo-card';
 const upperText = document.createElement('div')
 upperText.className = 'todo-upper-text'
 const lowerText = document.createElement('div')
 lowerText.className = 'todo-lower-text'
 
 const todoName = document.createElement('p');
 todoName.className = 'todo-name';
 todoName.textContent = todo.name;
 const todoPriority = document.createElement('div');
 todoPriority.className = 'todo-priority';
 todoPriority.textContent = todo.priority;
 const todoDueDate = document.createElement('div');
 todoDueDate.className = 'todo-date';
 todoDueDate.textContent = todo.dueDate;

 upperText.append(todoName, todoPriority, todoDueDate)

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

export function displayAllTodos() {
// projectsArr.map(a => a.todos).forEach(createTodoCard())
const arr = projectsArr.map(a => a.todos);
console.log(arr)
arr.forEach(el => {
    el.forEach(el => createTodoCard(el))
})

}