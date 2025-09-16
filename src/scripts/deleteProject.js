import { projectsArr } from "./project";
import { displayProjects } from "./DOM-all-projects-container";
import { putAllTodosInAllTodosArray } from "./todo";
import { projectsButtonDisplayingItsTodos } from "./projectBtnDisplayTodos";
import { displayAllByDates } from "./navigationButtons";
import { createDeleteProjectModal } from "./modals/DOMdeleteProjectDialog";
import { addButtonsInDeleteProjectDialogFunctionality } from "./modals/deleteProjectDialogFunc";

export function deleteProjectFunc() {
const deleteProjectBtn = document.querySelector('.delete-project');
deleteProjectBtn.addEventListener('click', () => {
    const deleteProjectDialog = document.querySelector('.delete-project-dialog');
    deleteProjectDialog.showModal()
    createDeleteProjectModal()
    addButtonsInDeleteProjectDialogFunctionality()
}
)
}
// {
// const deleteProjectBtn = document.querySelector('.delete-project');
// console.log('click delete id nr', deleteProjectBtn.name)
// const thisProject = projectsArr.filter(a => a.name == deleteProjectBtn.name)
// const numberInProjectsArr = projectsArr.indexOf(thisProject[0]);


// projectsArr.splice(numberInProjectsArr, 1)
// console.log(thisProject[0],
// numberInProjectsArr,
// projectsArr);

// displayProjects()
// projectsButtonDisplayingItsTodos()
// putAllTodosInAllTodosArray()
// displayAllByDates()
// }