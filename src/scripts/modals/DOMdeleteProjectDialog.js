import './styles/deleteProjectModal.css'


export function createDeleteProjectModal () {
const deleteProjectDialog = document.querySelector('.delete-project-dialog');

const paraQuestion = document.createElement('p');
paraQuestion.className = 'paraQuestion';
const projectTitle = document.querySelector('.main-header-upper').textContent;
console.log(projectTitle);
paraQuestion.innerHTML = `Are you sure you want to delete project: <b><i>${projectTitle}</b></i><br>and all ToDos that belong to it?`;

// const listOfTodos = document.createElement('ul')
// listOfTodos.className = 'listOfTodos'

const buttonsDiv = document.createElement('div')
buttonsDiv.className = 'buttonsDiv'

const removeProjectBtn = document.createElement('button')
removeProjectBtn.className = 'removeProjectBtn'
removeProjectBtn.innerText = 'Delete'

const cancelRemovingProjectButton = document.createElement('button');
cancelRemovingProjectButton.className = 'cancelRemovingProjectButton'
cancelRemovingProjectButton.innerText = 'Cancel'


buttonsDiv.append(removeProjectBtn, cancelRemovingProjectButton);
deleteProjectDialog.append(paraQuestion, buttonsDiv)

}