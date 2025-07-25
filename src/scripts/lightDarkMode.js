



export function changeMode() {
const mode = document.querySelector('.mode')
mode.addEventListener('click', () => {
    console.log('cliced'); 
    toggleMode()
}
)
} 


function toggleMode() {
    const light = document.querySelector('.light-mode');
    const dark = document.querySelector('.dark-mode')
    console.log(light.hidden, dark.hidden)
    if (light.hidden == false) {
        dark.hidden = false;
        light.hidden = true;
        changeVariables()
    }
    else {
        dark.hidden = true;
        light.hidden = false;
        unchangeVariables();
    }
}


function changeVariables(){
    const r = document.querySelector(':root');
    r.style.setProperty('--background-color', "#ecdcdc")
    r.style.setProperty('--text-color', '#271539')
}

function unchangeVariables(){
    const r = document.querySelector(':root');
    r.style.setProperty('--background-color', "#54585f")
    r.style.setProperty('--text-color', '#bab6be')

}