import '../styles/all-project-container.css'
import { projectsArr } from "./project";


export function displayProjects(){
const projectDiv = document.querySelector('.all-projects');
projectDiv.innerHTML = '';

function createProjectListItem(){
    const nameArr = projectsArr.map(a => a.name)
    nameArr.forEach((item) => {
        const projectItem = document.createElement('li');
        projectItem.className = 'projectItem'
        projectItem.innerText = item;
        projectDiv.append(projectItem)
    })
}

createProjectListItem();

}