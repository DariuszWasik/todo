import { ToDo } from "../todo";
import { projectsArr } from "../project";
import { allTodosArr } from "../todo";
import { putAllTodosInAllTodosArray } from "../todo";
import { format } from "date-fns";


export { cancelNewTodo, addNewTodo }

    const todoDialog = document.querySelector('.add-todo-dialog');

    function closeTodoDialog() {
        todoDialog.innerHTML = '';
        todoDialog.close();
    }

    function cancelNewTodo() {
        const cancelButton = document.querySelector('.cancelBtn');
        cancelButton.addEventListener('click', () => closeTodoDialog())
    }

    function addNewTodo() {
        const addTodoBtn = document.querySelector('.addBtn');
        const nameInput = document.querySelector('.nameInput');
        const descInput = document.querySelector('.descInput');
        const dateInput = document.querySelector('.dateInput');
        const selectInput = document.querySelector('#selectProjectInput');
        const priorityInput = document.querySelector('#priorityInput')
        
        
        addTodoBtn.addEventListener('click', () => {
            if(nameInput.value.length < 3){
                nameInput.value = '';
                nameInput.style.border = '3px solid red';
                nameInput.placeholder = 'minimum 3 characters'
            }
            else {
        const projectToGo = projectsArr.filter(a => a.name == selectInput.value);
        const newTodo = new ToDo (nameInput.value, descInput.value, format(new Date(dateInput.value), 'eee, dd MMM yyy'),priorityInput.value, projectToGo[0].id);
        console.log(newTodo)
        newTodo.assignToProject();
        putAllTodosInAllTodosArray()
        console.log(allTodosArr, 'alltodosarr after add task button')        
        closeTodoDialog();
        }})
    }