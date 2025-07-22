import { projectsArr } from "./project";
import { createTodoCard, displayTodoCard, container } from "./DOM-todoCard";
import { changeFinishedByCheckBox } from "./finishTodo";

export function projectsButtonDisplayingItsTodos() {
    const allProjects = document.querySelectorAll('.projectItem');
    console.log(allProjects, 'allProjects')
    allProjects.forEach(el => {
        el.addEventListener('click', () => {
            container.innerHTML = '';
          
            const clickedProject = projectsArr.filter(a => a.name == el.outerText)
            clickedProject[0].todos.forEach(el =>{
              createTodoCard(el);
            }
        )
        changeFinishedByCheckBox();
        })
    })
}


