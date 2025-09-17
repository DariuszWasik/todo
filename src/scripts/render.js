import {displayAllByDates, displayTodayTasks, displayImportant, displayWeek, displayOverdue} from './navigationButtons'
import { projectsArr } from "./project";
import { projectsNamesArr } from "./DOM-all-projects-container";
import { displayProjectsTodos } from "./projectBtnDisplayTodos";
import { updateLocalStorage } from './localStorage';





export function render() {
    const header = document.querySelector('.main-header')
    const mainHeaderUpper = document.querySelector('.main-header-upper')
    console.log(projectsArr,'z funcji render')
    console.log(mainHeaderUpper)
    // console.log(projectsNamesArr.includes(header.textContent.trim()))
    if(mainHeaderUpper !== null && projectsNamesArr.includes(mainHeaderUpper.textContent.trim())){
        console.log('yesYYYYYYYYYYYYYYYYYYYYYYYYYYY')
        const id = projectsNamesArr.indexOf(mainHeaderUpper.textContent.trim())
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
updateLocalStorage()
}