import { container } from "./DOM-todoCard";



export function addAddTodoBtnInProjectContainer() {
    const plusDiv = document.createElement('div');
    plusDiv.className = 'plusDiv';
    plusDiv.innerText = '  +  ';
    container.append(plusDiv)

}