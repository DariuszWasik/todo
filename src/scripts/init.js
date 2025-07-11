import { Project, projectsArr } from "./project";
import { ToDo } from "./todo";
import { displayProjects } from "./DOM-all-projects-container";
import { addProject } from "./add-new-project-button";
import { displayAllTodos } from "./DOM-todoCard";

export function init () {
    console.log('siema')
// console.log(projectsArr);
const zadania = new Project('zadania', 'do wykonania niebawem');
zadania.putProjectInProjectsArr();
const telefony = new Project('telefony', 'wazne kontakty')
telefony.putProjectInProjectsArr();
console.log(zadania, telefony);
console.log(projectsArr);

const zadzwonDoLekarza = new ToDo('zadzown do lekarz', 'zapytaj o recepte Ani', '1/2/2024', 'high', 1);
console.log(zadzwonDoLekarza)
zadzwonDoLekarza.assignToProject();

const teleankieta = new ToDo('zadzown energetyki', 'wez udzial w ankiecie', '1/4/2024', 'high', 1);
console.log(teleankieta);
teleankieta.assignToProject();

const rozliczPodatek = new ToDo('rozlicz podatek', 'sprobuj uzyskac ulge na dzieci', '25/1/2025', 'low', 0);
rozliczPodatek.assignToProject();
 loadActions();
}

function loadActions() {
    displayProjects();
    addProject()
    displayAllTodos()
}