import { projectsArr, Project } from "./project";
import { allTodosArr, putAllTodosInAllTodosArray } from "./todo";
import { ToDo } from "./todo";
import { initialJSON } from "./intialJSON";

export {initData, createLocalStorage, checkForLocalStorageAtTheBeginning, updateLocalStorage}



function checkForLocalStorageAtTheBeginning() {

if(localStorage.local) 
    initData(localStorage.local)
else initData(initialJSON) 
}


function initData(string) {
    console.log(projectsArr, 'projects')
    console.log(allTodosArr, 'todos')
    // console.log(JSON.stringify(projectsArr))
    // const projectsArrJSON = JSON.stringify(projectsArr)
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
            const todo = new ToDo(td.name, td.description, td.dueDate, td.priority, td.projectID)
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

function createLocalStorage() {
    localStorage.setItem('local', JSON.stringify(projectsArr))
    if(localStorage.local) {console.log('yes')}
    else {console.log('no')}
}

function updateLocalStorage(){
    console.log(projectsArr)
    localStorage.setItem('local', JSON.stringify(projectsArr))
}