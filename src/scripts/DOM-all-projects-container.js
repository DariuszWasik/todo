import '../styles/all-project-container.css'
import { projectsArr } from "./project";

export { projectsNamesArr, displayProjects }



let projectsNamesArr = [];

function putNamesInArr() {
    projectsNamesArr = projectsArr.map(a => a.name)
    }

function displayProjects(){
const projectDiv = document.querySelector('.all-projects');
projectDiv.innerHTML = '';


createProjectListItem();
function createProjectListItem(){
    putNamesInArr();
    console.log('tu jestem a projectsNamesArr to:', projectsNamesArr )

    projectsNamesArr.forEach((item) => {
        const projectItem = document.createElement('li');
        projectItem.className = 'projectItem'
        projectItem.innerText = item;
        projectDiv.append(projectItem)
    })
}

}