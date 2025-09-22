export { createModal }
import './styles/deleteProjectModal.css'


function createModal() {
    const body = document.body
    const infoModal = document.createElement('dialog')
    infoModal.className = 'info-modal'
    const paraInfo = document.createElement('p');
    paraInfo.className = 'para-info';
    paraInfo.textContent = 'costam kurde bedzie napisane w swoim czasie'
    const closeInfo = document.createElement('button')
    closeInfo.className = 'close-info';
    closeInfo.textContent = 'close'
    infoModal.append(paraInfo, closeInfo)
    body.append(infoModal)
    infoModal.showModal()
    closeInfo.addEventListener('click', () => 
        {
        // infoModal.close()
        infoModal.remove()
        }
    )
}