import { changeFinishedByCheckBox } from "./finishTodo";
import { removeTodoFunc } from "./removeTodo";
import { editTodoFunction } from "./editTodo";


export function giveTodoCardButtonsFunctionality() {
    changeFinishedByCheckBox();
    removeTodoFunc();
    editTodoFunction();
}