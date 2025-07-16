import { ToDo } from "../todo";


   
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

        addTodoBtn.addEventListener('click', () => {
        const newTodo = new ToDo (nameInput.value, descInput.value, dateInput.value, selectInput.value, 2 );
        console.log(newTodo)
        })
    }