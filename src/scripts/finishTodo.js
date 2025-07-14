import { projectsArr } from "./project";
import { allTodosArr, ToDo } from "./todo";


export function changeFinishedByCheckBox () {
const checkBox = document.querySelectorAll('.finished');
console.log(checkBox)
checkBox.forEach(box => {
    box.addEventListener('click', ()=>{
       const checkedTodo = allTodosArr.filter(a => a.todoID == box.name);
       checkedTodo[0].changeFinish()
       console.log(checkedTodo);
       console.log(allTodosArr)
    })
})
}
