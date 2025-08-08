import { projectsArr } from "./project";



export function deleteProjectFunc() {
const deleteProjectBtn = document.querySelector('.delete-project');
deleteProjectBtn.addEventListener('click', () => {
    console.log('click delete id nr', deleteProjectBtn.name)
    const thisProject = projectsArr.filter(a => a.name == deleteProjectBtn.name)
    const numberInProjectsArr = thisProject[0].id;
    projectsArr.splice(numberInProjectsArr, 1)
    console.log(thisProject[0],
    numberInProjectsArr,
    projectsArr);
})
}