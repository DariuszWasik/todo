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
        const projectName = document.createElement('p')
        projectName.innerText = item;
        const projectIcon = document.createElement('div');
        projectIcon.className = 'projectIcon'
        projectIcon.innerHTML =  `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' ><title>format-list-numbered</title><path d="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z" /></svg>
        `;
        // projectIcon.xmlns = "http://www.w3.org/2000/svg";
        // projectIcon.viewBox = "0 0 24 24";
        // projectIcon.fill = 'currentColor'
        projectItem.append(projectIcon, projectName)
        projectDiv.append(projectItem)
    })
}

}