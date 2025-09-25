export { createModal }
import './styles/deleteProjectModal.css'


function createModal() {
    const body = document.body
    const infoModal = document.createElement('dialog')
    infoModal.className = 'info-modal'
    const paraInfo = document.createElement('p');
    paraInfo.className = 'para-info';
    paraInfo.innerHTML = `
      <strong>ToDo App</strong><br>
      Add your tasks and organize them into projects.<br>
      See what’s due today, this week, or what’s most important.<br>
      Everything you add stays saved on your device, <br>
      so it’s still here when you come back.<br>
    `;
    const closeInfo = document.createElement('button')
    closeInfo.className = 'close-info';
    closeInfo.textContent = 'close'
    infoModal.append(paraInfo, closeInfo)
    body.append(infoModal)
    infoModal.showModal()
    closeInfo.addEventListener('click', () => 
        {
        infoModal.close()
        infoModal.remove()
        }
    )
}