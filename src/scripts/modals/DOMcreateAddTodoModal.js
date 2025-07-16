import './styles/addTodoModal.css'
import { projectsNamesArr } from '../DOM-all-projects-container';

export function createAddTodoModal() {
    const todoDialog = document.querySelector('.add-todo-dialog');

    const header = document.createElement('p');
    header.className = 'header';
    header.innerText = 'Add Task'

    
    const nameInput = document.createElement('input');
    nameInput.className = 'nameInput'
    nameInput.placeholder = 'Task name:'

    const descInput = document.createElement('textarea');
    descInput.className = 'descInput';
    descInput.placeholder = 'Description:'
    
    const dateDiv = document.createElement('div');
    dateDiv.className = 'dateDiv'

    const dateLabel = document.createElement('label');
    dateLabel.className = 'dateLabel'
    dateLabel.for = 'dateInput'
    dateLabel.textContent = 'Due Date:'

    const dateInput = document.createElement('input');
    dateInput.className = 'dateInput';
    dateInput.name = 'dateInput';
    dateInput.type = 'date'

    dateDiv.append(dateLabel, dateInput)

    
    const selectProjectDiv = document.createElement('div');
    const selectProjectLabel= document.createElement('label');
    selectProjectLabel.for = 'selectProjectInput';
    selectProjectLabel.className = 'selectProjectLabel';
    selectProjectLabel.innerText = 'Choose Project:'

    const selectProjectInput = document.createElement('select');
    selectProjectInput.id = 'selectProjectInput';
    projectsNamesArr.forEach(el =>{
        const option = document.createElement('option');
        option.value = el;
        option.text = el;
        selectProjectInput.add(option)
    })

    selectProjectDiv.append(selectProjectLabel, selectProjectInput)

    const addBtn = document.createElement('button');
    addBtn.className = 'addBtn';
    addBtn.innerText = 'Add Task'
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancelBtn';
    cancelBtn.innerText = 'Cancel'


    todoDialog.append(header, nameInput, descInput,  dateDiv, selectProjectDiv, addBtn, cancelBtn)


}