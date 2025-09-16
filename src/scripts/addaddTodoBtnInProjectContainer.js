import { container } from "./DOM-todoCard";

import { createAddTodoModal } from "./modals/DOMcreateAddTodoModal";
import { cancelNewTodo, addNewTodo } from "./modals/addTodoFunc";


export function addAddTodoBtnInProjectContainer(project) {
    const plusDiv = document.createElement('div');
    plusDiv.className = 'plusDiv';
    plusDiv.innerText = '  +  ';
    container.append(plusDiv)
    
    const addTodoDirect = () => {
    
    const addTodoModal = document.querySelector('.add-todo-dialog')
        addTodoModal.showModal();
        createAddTodoModal();
        const selectInput = document.querySelector('#selectProjectInput');
        function removeOptions () { 
            while (selectInput.options.length > 0){
                selectInput.remove(0)
            }
        }
        removeOptions();

        const option = document.createElement('option');
        option.value = project.name;
        option.text = project.name;
        option.disabled = true;
        option.selected = true;
        selectInput.add(option)
        addNewTodo();
        cancelNewTodo();
    }
            plusDiv.addEventListener('click', addTodoDirect)
        }