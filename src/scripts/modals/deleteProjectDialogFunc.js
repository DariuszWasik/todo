import { projectsArr } from "../project";
import { displayProjects } from "../DOM-all-projects-container";
import { putAllTodosInAllTodosArray } from "../todo";
import { projectsButtonDisplayingItsTodos } from "../projectBtnDisplayTodos";
import { displayAllByDates } from "../navigationButtons";


function closeDeleteProjectModal() {
    const deleteProjectModal = document.querySelector('.delete-project-dialog');
    deleteProjectModal.innerHTML = ''
    deleteProjectModal.close();
}

function deleteProject(){
const deleteProjectBtn = document.querySelector('.delete-project');
console.log('click delete id nr', deleteProjectBtn.name)
const thisProject = projectsArr.filter(a => a.name == deleteProjectBtn.name)
const numberInProjectsArr = projectsArr.indexOf(thisProject[0]);


projectsArr.splice(numberInProjectsArr, 1)
console.log(thisProject[0],
numberInProjectsArr,
projectsArr);

displayProjects()
projectsButtonDisplayingItsTodos()
putAllTodosInAllTodosArray()
displayAllByDates()
closeDeleteProjectModal()
}


export function addButtonsInDeleteProjectDialogFunctionality(){
const cancelRemovingProjectButton = document.querySelector('.cancelRemovingProjectButton')
cancelRemovingProjectButton.addEventListener('click', closeDeleteProjectModal)
const removeProjectBtn = document.querySelector('.removeProjectBtn');
removeProjectBtn.addEventListener('click', deleteProject)
}