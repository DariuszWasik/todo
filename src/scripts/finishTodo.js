import { updateLocalStorage } from "./localStorage";
import { projectsArr } from "./project";
import { render } from "./render";
import { allTodosArr, ToDo } from "./todo";


export function changeFinishedByCheckBox () {
const checkBox = document.querySelectorAll('.finished');
checkBox.forEach(box => {
    box.addEventListener('click', ()=>{
        console.log('siemaHEniu')
        // const todoName = document.querySelector('.todo-name');
        // todoName.style.color = 'gold'
        // console.log(todoName)
       const checkedTodo = allTodosArr.filter(a => a.todoID == box.name);
    //    let thisBox = document.getElementsByName(box.name)
    //    console.log(thisBox[0].nextSibling, 'nextsiblingthisBox')
    //    const nextSibling = thisBox[0].nextSibling;
    //    nextSibling.style.color = 'blue'
       console.log(allTodosArr, 'alltodosArr')
       console.log(checkedTodo, 'checkedTodo')
       checkedTodo[0].changeFinish()
       console.log(checkedTodo, '-z funkcji changeFinishedByCheckBox');
       console.log(allTodosArr)
        render()
    })
})
}

function maintainDisplayingFinished() {
    const todoName = document.querySelector('.todo-name');
}