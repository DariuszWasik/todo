import { ToDo } from "../todo";
import { projectsArr } from "../project";
import { allTodosArr } from "../todo";
import { putAllTodosInAllTodosArray } from "../todo";
import { format } from "date-fns";
import { renderAfterRemoving } from "../removeTodo";

export { cancelEditTodo, editTodo }

    const editTodoDialog = document.querySelector('.edit-todo-dialog');

    function closeEditTodoDialog() {
        editTodoDialog.innerHTML = '';
        editTodoDialog.close();
    }

    function cancelEditTodo() {
        const cancelButton = document.querySelector('.cancelBtn');
        cancelButton.addEventListener('click', () => closeEditTodoDialog())
    }

    function editTodo() {
        const editTodoBtn = document.querySelector('.editBtn');
        const nameInput = document.querySelector('.nameInput');
        const descInput = document.querySelector('.descInput');
        const dateInput = document.querySelector('.dateInput');
        const selectInput = document.querySelector('#selectProjectInput');
        const priorityInput = document.querySelector('#priorityInput')
        
        
        editTodoBtn.addEventListener('click', () => {
            if(nameInput.value.length < 3){
                nameInput.value = '';
                nameInput.style.border = '3px solid red';
                nameInput.placeholder = 'minimum 3 characters'
            }
            else {
                console.log('siema' , editTodoBtn.name)
                console.log(allTodosArr.filter(todo => todo.todoID == editTodoBtn.name)[0])
                const todoToBeEdit = allTodosArr.filter(todo => todo.todoID == editTodoBtn.name)[0];
                todoToBeEdit.name = nameInput.value;
                todoToBeEdit.description = descInput.value;
                todoToBeEdit.dueDate = format(new Date(dateInput.value), 'eee, dd MMM yyy');
                todoToBeEdit.priority = priorityInput.value;
                console.log(allTodosArr)
                closeEditTodoDialog();
                renderAfterRemoving();
        }})


    }