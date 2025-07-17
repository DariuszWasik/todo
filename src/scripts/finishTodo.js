import { projectsArr } from "./project";
import { allTodosArr, ToDo } from "./todo";


export function changeFinishedByCheckBox () {
const checkBox = document.querySelectorAll('.finished');
checkBox.forEach(box => {
    box.addEventListener('click', ()=>{
       const checkedTodo = allTodosArr.filter(a => a.todoID == box.name);
       console.log(allTodosArr, 'alltodosArr')
       checkedTodo[0].changeFinish()
       console.log(checkedTodo, '-z funkcji changeFinishedByCheckBox');
       console.log(allTodosArr)
    })
})
}
