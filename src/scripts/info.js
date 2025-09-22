import { openInfoModal } from "./modals/infoModalFunc";


export function info() {
    const infoBtn = document.querySelector('.info');
    infoBtn.addEventListener('click', openInfoModal)
}