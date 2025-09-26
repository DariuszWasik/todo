
// import { Template } from "webpack";

import { add } from "date-fns/fp";

export {smallScreenFunc, addFunctionalityOnSmallScreen}




// function addFunctionalityOnSmallScreen() {
//     window.addEventListener('window.innerWidth < 700', () => {console.log('siemanjero heniu')})
// }



// function addFunctionalityOnSmallScreen() {
//   window.addEventListener('resize', () => {
//     if (window.innerWidth < 700) {
//       console.log('siemanjero heniu');
//     }
//   });
// }
function addFunctionalityOnSmallScreen() {
  let hasRun = false; // flaga dla małego ekranu

  function checkWidth() {
    if (window.innerWidth < 700 && !hasRun) {
      console.log("siemanjero heniu");
      loadActions() // Twoja funkcjonalność
      hasRun = true;
    } else if (window.innerWidth >= 700) {
      // reset flagi, gdy ekran jest duży
      hasRun = false;
    }
  }

  // sprawdzenie przy starcie
  checkWidth();

  // nasłuchuj resize
  window.addEventListener("resize", checkWidth);
}




function loadActions() {
    console.log('inner width is smaller than 700px')
    
}




//     // if(hamburgerSVG.style.display == 'flex'){
//         // console.log('siema')}
//     // else console.log('dupa')
//     const mql = window.matchMedia("(width <= 700px)");

// mql.onchange = (e) => {
//   if (e.matches) {
//     /* the viewport is 700 pixels wide or less */
//     console.log("This is a narrow screen — less than 700px wide.");
//   } else {
//     /* the viewport is more than 700 pixels wide */
//     console.log("This is a wide screen — more than 700px wide.");
//   }
// };


// const main = document.querySelector('main')
// console.log('siema')
// console.log(window.innerWidth<700 )



// // // })




const aside = document.querySelector('.aside');
const main = document.querySelector('main');
function toggleAsideOpacity() {
aside.style.opacity = aside.style.opacity == "1" ? "0" : "1"
}
function toggleBlur(){
main.style.filter = main.style.filter == 'blur(2px)' ? 'none' : 'blur(2px)'
}

function smallScreenFunc() {
    console.log('imported')
    const hamburgerSVG = document.querySelector('.hamburger-svg');
    hamburgerSVG.addEventListener('click', () => {
        console.log('you have clicked on hamburger menu');
            // aside.style.display ='grid'
            aside.style.transition = '0.8s ease'
            toggleAsideOpacity()
            aside.style.display = 'grid'
            const r = document.querySelector(':root');
            r.style.setProperty('--opacityBGC', "0.8")
            aside.style.backgroundColor = 'var(--background-color)';  
        const content = document.querySelector('.content');
        
        content.style.gridTemplateRows='var(--header-height) 1fr';
        content.style.gridTemplateColumns='var(--aside-width) 1fr';

        main.style.gridColumn = '1 / 3'
        main.style.zIndex = '-1';
        toggleBlur();
        
        
        // hamburgerSVG.addEventListener('click', () =>{
        //     aside.style.opacity = '0'
        // } )
        aside.addEventListener('click', () => {
        aside.style.opacity = '0'
        // aside.style.backgroundColor = 'inherit'
        main.style.zIndex = '1'
        main.style.filter = 'none'
    } )

    //     if (window.innerWidth > 758){   
    //             console.log('window widhe greater than 758')
    // aside.style.opacity = '1'
    // main.style.gridColumn = '2 / 3'
    // main.style.zIndex = '0'
    //     }
    })

    addFunctionalityOnSmallScreen()
}

        // window.addEventListener('window.innerWidth > 758', () => {
        //     // loadActions(
        //     main.style.backgroundColor = 'green'
        //     aside.style.opacity  = '1'

        // })
        // content.style.gridTemplateAreas= `
        // 'headerheader'
        // 'aside' 'main'`
        // content.style.backgroundColor = 'yellow' 
    // }
//     const asideNav = document.querySelector('.aside-nav');
//     asideNav.showModal();
//     function makeItWork() {
// const allBtn = document.querySelector('.all')
// const todayBtn = document.querySelector('.today')
// const importantBtn = document.querySelector('.important')
// const weekBtn = document.querySelector('.this-week')
// const overdueBtn = document.querySelector('.overdue')

// const mainHeader = document.querySelector('.main-header')
// allBtn.style.color = 'red'
 
// giveNavigationButtonsFunc();
//     }
//     makeItWork()
