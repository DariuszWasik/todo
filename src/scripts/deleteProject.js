import { projectsArr } from "./project";
import { displayProjects } from "./DOM-all-projects-container";
import { putAllTodosInAllTodosArray } from "./todo";
import { projectsButtonDisplayingItsTodos } from "./projectBtnDisplayTodos";
import { displayAllByDates } from "./navigationButtons";

export function deleteProjectFunc() {
const deleteProjectBtn = document.querySelector('.delete-project');
deleteProjectBtn.addEventListener('click', () => {
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
})
}