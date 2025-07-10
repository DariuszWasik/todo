import { Project, projectsArr } from "../project";
import { displayProjects } from "../DOM-all-projects-container";

export {cancelNewProject, addNewProject} 

const addProjectDialog = document.querySelector('.add-project-dialog')
function closeDialog() {
    addProjectDialog.innerHTML=''
    addProjectDialog.close()

}


function cancelNewProject() {
    const cancelBtn =  document.querySelector('.cancelBtn');
cancelBtn.addEventListener('click', () => closeDialog())
}


function addNewProject() {
    const addBtn =  document.querySelector('.addBtn');
    const nameInput = document.querySelector('.nameInput')
    const descInput = document.querySelector('.descInput')
    
    addBtn.addEventListener('click', () => {
        const newProject = new Project (nameInput.value, descInput.value)
        projectsArr.push(newProject);
        displayProjects();
        closeDialog()        
}
)

}