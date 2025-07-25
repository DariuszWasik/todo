import { projectsArr } from "./project";
import { createTodoCard, displayTodoCard, container } from "./DOM-todoCard";
import { giveTodoCardButtonsFunctionality } from "./todoCardActions";
import { allTodosArr } from "./todo";


export { projectsButtonDisplayingItsTodos, displayProjectsTodos}

const mainHeader = document.querySelector('.main-header')

 function projectsButtonDisplayingItsTodos() {
    const allProjects = document.querySelectorAll('.projectItem');
    allProjects.forEach(el => {
        el.addEventListener('click', () => {
            console.log(allProjects, 'allProjects')
            container.innerHTML = '';
            mainHeader.textContent =  el.outerText.trim()
            console.log(projectsArr, '-this is project arr')
            const clickedProject = projectsArr.filter(a => a.name == el.outerText)
            console.log(clickedProject[0].id, 'clicked project ID')
            displayProjectsTodos(clickedProject[0])
        
        console.log(allTodosArr, '-alltodosarr  przy puszczeniu funcji projectsBtndisplayitsTdo')
        
    })
})
}


function displayProjectsTodos(project){
    container.innerHTML = '';
    project.todos.forEach(el =>
        createTodoCard(el)
    )
    giveTodoCardButtonsFunctionality() 
}

