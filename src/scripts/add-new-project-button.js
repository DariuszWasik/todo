import { createAddProjectModal } from "./modals/DOMcreateProjectsDialog";
import { cancelNewProject, addNewProject } from "./modals/projectDialogFunc";


export function addProject(){
    const addProjectBtn = document.querySelector('.add-project-div');
    const addProjectDialog = document.querySelector('.add-project-dialog')
    addProjectBtn.addEventListener( 'click', () => {
    addProjectDialog.showModal();
    createAddProjectModal();
    cancelNewProject();
    addNewProject();
    })
}

    