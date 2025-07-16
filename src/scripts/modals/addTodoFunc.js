import { ToDo } from "../todo";
import { projectsArr } from "../project";

   
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
        const projectToGo = projectsArr.filter(a => a.name == selectInput.value);
        const newTodo = new ToDo (nameInput.value, descInput.value, dateInput.value, priorityInput.value, projectToGo[0].id);
        console.log(newTodo)
        newTodo.assignToProject();
        closeTodoDialog();
        })
    }