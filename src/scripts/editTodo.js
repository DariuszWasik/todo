import { allTodosArr } from "./todo";
import {displayAllByDates, displayTodayTasks, displayImportant, displayWeek, displayOverdue} from './navigationButtons'
import { projectsArr } from "./project";
import { projectsNamesArr } from "./DOM-all-projects-container";
import { displayProjectsTodos } from "./projectBtnDisplayTodos";
import { createEditTodoModal } from "./modals/DOMcreateEditTodoDialog";
import { cancelEditTodo, editTodo } from "./modals/editTodoFunc";

export function editTodoFunction() {
    const editTodoBtn = document.querySelectorAll('.edit-todo');
    editTodoBtn.forEach(editBtn => {
        editBtn.addEventListener('click', () => {
            console.log('this is edit button which name is', editBtn.name,
                'and wich belongs to this todo', allTodosArr.filter(todo => todo.todoID == editBtn.name)[0])
            const editBtnBelongsToThisTodo = allTodosArr.filter(todo => todo.todoID == editBtn.name)[0];
            console.log(editBtnBelongsToThisTodo)
            const editTodoDialog = document.querySelector('.edit-todo-dialog');
            editTodoDialog.showModal();
            createEditTodoModal(editBtnBelongsToThisTodo);
            cancelEditTodo();
            editTodo();
        })
    })

}