import { Project, projectsArr } from "./project";
import { putAllTodosInAllTodosArray, ToDo } from "./todo";
import { displayProjects } from "./DOM-all-projects-container";
import { addProject } from "./add-new-project-button";

import { projectsButtonDisplayingItsTodos } from "./projectBtnDisplayTodos";
import { addTask } from "./addToDoBtn";
import { format } from "date-fns";
import { add } from "date-fns";
import { giveNavigationButtonsFunc } from "./navigationButtons";
import { displayAllByDates } from "./navigationButtons";



export function init () {
    console.log('siema')
// console.log(projectsArr);


const zadania = new Project('zadania', 'do wykonania niebawem');
zadania.putProjectInProjectsArr();
const zadania2 = new Project('zadania inne', 'do przemyslenia');
zadania2.putProjectInProjectsArr();
const telefony = new Project('telefony', 'wazne kontakty')
telefony.putProjectInProjectsArr();
console.log(zadania, telefony);
console.log(projectsArr);

const zadzwonDoLekarza = new ToDo('zadzown do lekarz', 'zapytaj o recepte Ani', format(add(new Date(), {days: -3}), 'eee, dd MMM yyy'), 'high', 2);
console.log(zadzwonDoLekarza)
zadzwonDoLekarza.assignToProject();

const teleankieta = new ToDo('zadzown energetyki', 'wez udzial w ankiecie', format(new Date(), 'eee, dd MMM yyy'), 'high', 2);
console.log(teleankieta);
teleankieta.assignToProject();

const rozliczPodatek = new ToDo('rozlicz podatek', 'sprobuj uzyskac ulge na dzieci',format(add(new Date(), {days: 6}), 'eee, dd MMM yyy'), 'low', 0);
rozliczPodatek.assignToProject();
 

loadActions();
}

function loadActions() {
    putAllTodosInAllTodosArray()
    displayProjects();
    addProject();
    addTask();   
    projectsButtonDisplayingItsTodos();
    giveNavigationButtonsFunc();
    displayAllByDates()
}