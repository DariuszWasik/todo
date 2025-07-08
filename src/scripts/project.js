export { projectsArr, Project };


const projectsArr = [];

class Project {
    constructor(name, description) {
        this.name = name;
        this. description = description
    }
    // this should be change later for randomID (when I can chose it on layout)
    // id = crypto.randomUUID(); - 
    id = projectsArr.length;
    todos = [];
    putProjectInProjectsArr(){projectsArr.push(this)};
}




