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
            mainHeader.innerHTML = ''
            const mainHeaderUpper = document.createElement('p');
            mainHeaderUpper.className = 'main-header-upper';
            const mainHeaderLower = document.createElement('div');
            mainHeaderLower.className = 'main-header-lower';
            // mainHeaderUpper.textContent = ''
            mainHeaderUpper.textContent = el.outerText.trim()
            const deletePara = document.createElement('p');
            deletePara.className = 'delete-para';
            deletePara.innerText = 'Delete project';
            const deleteProject = document.createElement('div')
            deleteProject.className = 'delete-project';
            deleteProject.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24"><path d="M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M11,10V18H5V10H11M13,8H3V18A2,2 0 0,0 5,20H11A2,2 0 0,0 13,18V8M14,5H11L10,4H6L5,5H2V7H14V5Z" /></svg>` 
            mainHeaderLower.append(deletePara, deleteProject)
            mainHeader.append(mainHeaderUpper, mainHeaderLower);

            // mainHeader.textContent =  el.outerText.trim();
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

