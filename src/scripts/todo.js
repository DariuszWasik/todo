import { projectsArr } from "./project";
export {ToDo, allTodosArr, putAllTodosInAllTodosArray}


class ToDo {
    constructor (name, description, dueDate, priority, projectID){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectID = projectID
    }
    
    todoID = crypto.randomUUID()
    finished = false;  
    
    changeFinish(){
        this.finished = !this.finished
    }

    filterProjectByID(id){
      return projectsArr.filter((project) => project.id === id)
       }
    
    assignToProject(){
        const whichProjectToDoBelong = this.filterProjectByID(this.projectID);
        console.log(whichProjectToDoBelong[0] , '--- do tego projektu chce byc');
        whichProjectToDoBelong[0].todos.push(this);
        console.log(projectsArr)
    }

}

let allTodosArr = []
function putAllTodosInAllTodosArray(){
    allTodosArr = [];
    projectsArr.map(a => a.todos).forEach(el => 
        {el.forEach(a => allTodosArr.push(a))})
}
