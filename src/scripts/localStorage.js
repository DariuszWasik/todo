import { projectsArr, Project } from "./project";
import { allTodosArr, putAllTodosInAllTodosArray } from "./todo";
import { ToDo } from "./todo";
// import { initialJSON } from "./intialJSON";
import { format } from "date-fns";
import { add } from "date-fns";


export {initData, checkForLocalStorageAtTheBeginning, updateLocalStorage}

let initialJSON = ''

function checkForLocalStorageAtTheBeginning() {

if(localStorage.local) 
    initData(localStorage.local)
else 
    {console.log('NIE MA!')
    createInitialJSON()
    initData(initialJSON) 
    }
}

function initData(string) {
    console.log(projectsArr, 'projects')
    console.log(allTodosArr, 'todos')
    const copy = JSON.parse(string);
    console.log(copy, 'copy')
    // console.log(typeof(copy))
    // console.log(typeof(projectsArr))
    // console.log(copy[0].todos), 'copy[0]'
    // const copyProjectsArr = []
    projectsArr.splice(0, projectsArr.length)
    // projectsArr.length = 0;
    console.log(projectsArr, 'after')
    console.log(projectsArr[1])
    
    copy.forEach(element => { 
        const project =  new Project(element.name, element.description);
        project.id = element.id;
        element.todos.forEach( td => {
            const todo = new ToDo(td.name, td.description, td.dueDate, td.priority, td.projectID, td.finished)
            todo.todoID = td.todoID;
            console.log(todo, 'todo')
            project.todos.push(todo)
        })
        projectsArr.push(project)
    });
    console.log(projectsArr, 'projects')
    // console.log(copyProjectsArr, 'copyProjectsArr')
    // console.log( copyProjectsArr === projectsArr)
    
    // let copyAllTodosArr = [];
    
    putAllTodosInAllTodosArray();

    // console.log(copyAllTodosArr, 'copyAlltodosArr')
    console.log(allTodosArr, 'alltodosarr')
    // console.log(allTodosArr == copyAllTodosArr)
    
    
}

function updateLocalStorage(){
    console.log(projectsArr)
    localStorage.setItem('local', JSON.stringify(projectsArr))
    console.log(localStorage.getItem('local'))
}

function createInitialJSON() {
    
//     const zadania = new Project('zadania', 'do wykonania niebawem');
//     zadania.putProjectInProjectsArr();
//     const zadania2 = new Project('zadania inne', 'do przemyslenia');
//     zadania2.putProjectInProjectsArr();
//     const telefony = new Project('telefony', 'wazne kontakty')
//     telefony.putProjectInProjectsArr();
//     console.log(zadania, telefony);
// console.log(projectsArr);

// const zadzwonDoLekarza = new ToDo('zadzown do lekarz', 'zapytaj o recepte Ani', format(add(new Date(), {days: -3}), 'eee, dd MMM yyy'), 'high', projectsArr[2].id);
// console.log(zadzwonDoLekarza)
// zadzwonDoLekarza.assignToProject();

// const teleankieta = new ToDo('zadzown energetyki', 'wez udzial w ankiecie', format(new Date(), 'eee, dd MMM yyy'), 'high', projectsArr[2].id);
// console.log(teleankieta);
// teleankieta.assignToProject();

// const rozliczPodatek = new ToDo('rozlicz podatek', 'sprobuj uzyskac ulge na dzieci',format(add(new Date(), {days: 6}), 'eee, dd MMM yyy'), 'low', projectsArr[0].id);
// rozliczPodatek.assignToProject();

const tasks = new Project('tasks', 'to do soon');
tasks.putProjectInProjectsArr();

const otherTasks = new Project('other tasks', 'for consideration');
otherTasks.putProjectInProjectsArr();

const phones = new Project('phones', 'important contacts');
phones.putProjectInProjectsArr();

console.log(tasks, phones);
console.log(projectsArr);

const callDoctor = new ToDo(
  'call doctor',
  'ask about Ania’s prescription',
  format(add(new Date(), { days: -3 }), 'eee, dd MMM yyy'),
  'high',
  projectsArr[2].id
);
console.log(callDoctor);
callDoctor.assignToProject();

const energySurvey = new ToDo(
  'call energy company',
  'take part in survey',
  format(new Date(), 'eee, dd MMM yyy'),
  'high',
  projectsArr[2].id
);
console.log(energySurvey);
energySurvey.assignToProject();

const taxReturn = new ToDo(
  'file tax return',
  'try to get child allowance',
  format(add(new Date(), { days: 6 }), 'eee, dd MMM yyy'),
  'low',
  projectsArr[0].id
);
taxReturn.assignToProject();



// putAllTodosInAllTodosArray()
console.log(JSON.stringify(projectsArr))
const projectsArrJSON = JSON.stringify(projectsArr)
initialJSON = JSON.stringify(projectsArr)

}