import { projectsArr, Project } from "./project";
import { allTodosArr } from "./todo";
import { ToDo } from "./todo";
import { putAllTodosInAllTodosArray } from "./todo";
import { initialJSON } from "./intialJSON";

export function localStorage() {
    console.log(projectsArr, 'projects')
    console.log(allTodosArr, 'todos')
    console.log(JSON.stringify(projectsArr))
    const projectsArrJSON = JSON.stringify(projectsArr)
    const copy = JSON.parse(initialJSON);
    console.log(copy, 'copy')
    console.log(typeof(copy))
    console.log(typeof(projectsArr))
    console.log(copy[0].todos), 'copy[0]'
    const copyProjectsArr = []
    copy.forEach(element => { 
        const project =  new Project(element.name, element.description);
        project.id = element.id;
        element.todos.forEach( td => {
            const todo = new ToDo(td.name, td.description, td.dueDate, td.priority, td.projectID)
            todo.todoID = td.todoID;
            console.log(todo, 'todo')
            project.todos.push(todo)
        })
        copyProjectsArr.push(project)
    });
    console.log(projectsArr, 'projects')
    console.log(copyProjectsArr, 'copyProjectsArr')
    console.log( copyProjectsArr === projectsArr)

    let copyAllTodosArr = [];
        copyProjectsArr.map(a => a.todos).forEach(el => 
        {el.forEach(a => copyAllTodosArr.push(a))})
    
    console.log(copyAllTodosArr, 'copyAlltodosArr')
    console.log(allTodosArr, 'alltodosarr')
    console.log(allTodosArr == copyAllTodosArr)
    

}