import {displayAllByDates, displayTodayTasks, displayImportant, displayWeek, displayOverdue} from './navigationButtons'
import { projectsArr } from "./project";
import { projectsNamesArr } from "./DOM-all-projects-container";
import { displayProjectsTodos } from "./projectBtnDisplayTodos";



const header = document.querySelector('.main-header')


export function render() {
    console.log(projectsArr)
    if(projectsNamesArr.includes(header.textContent.trim())){
        console.log('yesYYYYYYYYYYYYYYYYYYYYYYYYYYY')
        const id = projectsNamesArr.indexOf(header.textContent.trim())
        console.log(id, 'its id nr in arr')
        console.log(projectsArr[id], 'project with this id');
        displayProjectsTodos(projectsArr[id])
    }
    else {
    switch (header.textContent) {
        case 'All':
            displayAllByDates();
            break;
        case 'Today':
            displayTodayTasks();
            break;
        case '7 Days':
            displayWeek();
            break;
        case 'Overdue':
            displayOverdue();
            break;
        case 'Important':
            displayImportant();
            break;
    }
}
}