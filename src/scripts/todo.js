import { projectsArr } from "./project";
export {ToDo, allTodosArr, putAllTodosInAllTodosArray}


class ToDo {
    constructor (name, description, dueDate, priority, projectID, finished){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectID = projectID
        this.finished = finished
    }
    
    todoID = crypto.randomUUID()
    // finished = false;  
    
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

    removeTodo() {
        console.log('im going to remove todo');
        const index = allTodosArr.indexOf(this);
        console.log(index)
        allTodosArr.splice(index, 1)
        console.log(allTodosArr, 'after removing todo')
    }
}

let allTodosArr = []
function putAllTodosInAllTodosArray(){
    allTodosArr = [];
    projectsArr.map(a => a.todos).forEach(el => 
        {el.forEach(a => allTodosArr.push(a))})
}
