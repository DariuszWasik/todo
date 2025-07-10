import { createAddProjectModal } from "./modals/DOMcreateProjectsDialog";

export function addProject(){
    const addProjectBtn = document.querySelector('.add-project');
    const addProjectDialog = document.querySelector('.add-project-dialog')
    addProjectBtn.addEventListener( 'click', () => {
    addProjectDialog.showModal()
    createAddProjectModal();
})
}

    