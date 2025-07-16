import { ToDo } from "./todo";
import { createAddTodoModal } from "./modals/DOMcreateAddTodoModal";
import { cancelNewTodo, addNewTodo } from "./modals/addTodoFunc";


export function addTask () {
    const addTodoButton = document.querySelector('.add-todo');
    const addTodoModal = document.querySelector('.add-todo-dialog')
    addTodoButton.addEventListener('click', () => {
        addTodoModal.showModal();
        createAddTodoModal();
        addNewTodo();
        cancelNewTodo();
    })
    
}

