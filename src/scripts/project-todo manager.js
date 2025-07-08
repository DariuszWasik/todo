export { init }


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


class ToDo {
    constructor (name, description, dueDate, priority, projectID){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectID = projectID
    }

    
    assignToProject(){
        const whichProjectToDoBelong = filterProjectByID(this.projectID);
        console.log(whichProjectToDoBelong[0] , '--- do tego projektu chce byc');
        whichProjectToDoBelong[0].todos.push(this);
        console.log(projectsArr)
    }

}

function filterProjectByID(id){
   return projectsArr.filter((project) => project.id === id)
    }


 function init () {
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
}
