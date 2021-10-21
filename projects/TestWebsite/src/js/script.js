// let tabLinks = document.querySelectorAll('.tab-link')
// let tabContent = document.querySelectorAll('.tab-content')
// let linkBlocks = document.querySelectorAll('.tab-link-block')
//
// for (let i = 0; i < tabLinks.length; i++) {
//     tabLinks[i].addEventListener('click', (e) => {
//         e.preventDefault()
//         let tabAttr = e.target.getAttribute('data-tab')
//
//         for (let j = 0; j < tabLinks.length; j++) {
//             let contentAttr = tabContent[j].getAttribute('data-tab-content')
//
//             if (tabAttr === contentAttr) {
//                 linkBlocks[j].classList.add('active')
//                 tabContent[j].classList.add('active')
//             }
//             else {
//                 linkBlocks[j].classList.remove('active')
//                 tabContent[j].classList.remove('active')
//             }
//         }
//     }
// )
// }
let menuBtn = document.getElementById('menu-btn')
let menu = document.getElementById('menu-nav')
let menuLinks = document.querySelectorAll('.menu-link')
let menuSubtypes = document.querySelectorAll('.menu-subtype')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})
const changeMenu = el => {
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.remove('active')
    }
    el.classList.add('active')
}

menuLinks.forEach((element) => {
    element.addEventListener('click', e => {
        const currentBtn = e.target.dataset.menu
        changeMenu(e.target)
        for (let i = 0; i < menuSubtypes.length; i++) {
            menuSubtypes[i].classList.remove('active')
            if (menuSubtypes[i].dataset.subtype === currentBtn){
                menuSubtypes[i].classList.add('active')
            }
        }
    })
})


let promptLink = document.getElementById('prompt-link')
let prompt = document.querySelector('.prompt-container')
let closePrompt = document.getElementById('close-prompt')

promptLink.addEventListener('click', () => {
     prompt.classList.toggle('active')
})

closePrompt.addEventListener('click', () => {
     prompt.classList.remove('active')
})

let tabLinks = document.querySelectorAll('.tab-link')
let tabLinkBlocks = document.querySelectorAll('.tab-link-block')
let tabContent = document.querySelectorAll('.tab-content')

const changeClass = el => {
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active')
    }
    el.classList.add('active')
}

tabLinks.forEach((element) => {
    element.addEventListener('click', e => {
        const currentLink = e.target.dataset.tab
        changeClass(e.target)
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove('active')
            if (tabContent[i].dataset.content === currentLink){
                tabContent[i].classList.add('active')
            }
        }
    })
})


// let radio = document.querySelectorAll('input[type=radio]')
// let radioBlock = document.querySelectorAll('.sub-way')
// let checkbox = document.querySelectorAll('input[type=checkbox]')
// let checkboxBlock = document.querySelectorAll('.sub-item')
//
//     checkbox.forEach((el) => {
//         el.addEventListener('change', (e) => {
//                 e.target.parentElement.style.backgroundColor = e.target.checked ? "blue" : "white"
//             }
//         })
//     })


