import './styles/addProjectModal.css'

export function createAddProjectModal() {
    console.log(projectsNamesArr)
    const addProjectModal = document.querySelector('.add-project-dialog');
    
    const title = document.createElement('p');
    title.textContent = 'New Project';
    
    const nameLabel = document.createElement('label');
    nameLabel.className = 'nameLabel';
    nameLabel.textContent = 'name:'
    const nameInput = document.createElement('input');
    nameInput.className = 'nameInput';
    
    const nameDiv = document.createElement('div');
    nameDiv.className = 'nameDiv';
    nameDiv.append(nameLabel, nameInput)
    
    const descLabel = document.createElement('label');
    descLabel.className = 'descLabel';
    descLabel.textContent = 'description:'
    const descInput = document.createElement('textarea');
    descInput.className = 'descInput';
    
    const descDiv = document.createElement('div');
    descDiv.className = 'descDiv';
    descDiv.append(descLabel, descInput)
    
    const addBtn = document.createElement('button');
    addBtn.className = 'addBtn';
    addBtn.innerText = 'Add'
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancelBtn';
    cancelBtn.innerText = 'Cancel'
    
    const btnDiv = document.createElement('div');
    btnDiv.className = 'btnDiv';
    btnDiv.append(addBtn, cancelBtn)
    
    
    addProjectModal.append(title, nameDiv,  descDiv, btnDiv);
}