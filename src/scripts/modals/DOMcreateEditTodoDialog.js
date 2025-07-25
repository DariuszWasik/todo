import './styles/addTodoModal.css'
import { projectsNamesArr } from '../DOM-all-projects-container';
import { format } from 'date-fns';


export function createEditTodoModal(clickedTodo) {

    const editTodoDialog = document.querySelector('.edit-todo-dialog');
    editTodoDialog.innerHTML =''

    const header = document.createElement('p');
    header.className = 'header';
    header.innerText = 'Edit ToDo'

    
    const nameInput = document.createElement('input');
    nameInput.className = 'nameInput'
    nameInput.value = clickedTodo.name;

    const descInput = document.createElement('textarea');
    descInput.className = 'descInput';
    descInput.value = clickedTodo.description;
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
    dateInput.value =  format(new Date(clickedTodo.dueDate), 'yyyy-MM-dd');


    dateDiv.append(dateLabel, dateInput)

    const priorityDiv = document.createElement('div');
    priorityDiv.className = 'priorityDiv'
    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'priorityInput';
    priorityLabel.className = 'priorityLabel';
    priorityLabel.innerText = 'Priority:';

    const priorityInput = document.createElement('select');
    priorityInput.id = 'priorityInput';
    const priorityValues = ['high', 'medium', 'low'];
    priorityValues.forEach(el => {
        const option = document.createElement('option');
        option.value = el;
        option.text = el;
         if (option.value == clickedTodo.priority){
            option.selected = true;
        }
        priorityInput.add(option)
    })

    priorityDiv.append(priorityLabel, priorityInput)



    const selectProjectDiv = document.createElement('div');
    selectProjectDiv.className = 'selectProjectDiv'
    const selectProjectLabel= document.createElement('label');
    selectProjectLabel.for = 'selectProjectInput';
    selectProjectLabel.className = 'selectProjectLabel';
    selectProjectLabel.innerText = 'Choose Project:'

    const selectProjectInput = document.createElement('select');
    selectProjectInput.id = 'selectProjectInput';
    let optionNumber = 0;
    projectsNamesArr.forEach(el =>{
        const option = document.createElement('option');
        option.value = el;
        option.text = el;
        option.disabled = true;
        option.number = optionNumber;
        optionNumber++
        console.log(option.number)
        if (option.number == clickedTodo.projectID)
        {option.selected = true;
        option.disabled = false;
        }
        selectProjectInput.add(option)
    })

    selectProjectDiv.append(selectProjectLabel, selectProjectInput)

    const editBtn = document.createElement('button');
    editBtn.className = 'editBtn';
    editBtn.innerText = 'Edit Task';
    editBtn.name = clickedTodo.todoID;
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancelBtn';
    cancelBtn.innerText = 'Cancel'


    editTodoDialog.append(header, nameInput, descInput,  dateDiv, priorityDiv, selectProjectDiv, editBtn, cancelBtn)


}