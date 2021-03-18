const slides = document.querySelectorAll('.slide');
const dot = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider-wrapper');
const dots = document.querySelector('.slider-dots');

const changeClass = el => {
    for(let i = 0; i < dot.length; i++){
        dot[i].classList.remove('active');
    }
    el.classList.add('active');
}
dots.addEventListener('click', e => {
    const currentDot = e.target.dataset.dot;
    if(e.target.classList.contains('dot')){
        changeClass(e.target);
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.remove('active');
            if(slides[i].dataset.slide === currentDot){
                slides[i].classList.add('active');
            }
        }
    }
})

let nav = document.querySelector('.header-top');
let link = document.querySelectorAll('.header__link');

let linkActive = el =>{
    for(let i = 0; i < link.length; i++){
        link[i].classList.remove('active');
    }
    el.classList.add('active');
}

nav.addEventListener('click', e =>{
    if(e.target.classList.contains('header__link')){
        linkActive(e.target);
    }
})
let btnOpen = document.querySelector('.callback__button');
let btnClose = document.querySelector('.modal-close');
let modal = document.querySelector('.modal');
btnOpen.addEventListener('click', () =>{
    modal.classList.add('active');
})
btnClose.addEventListener('click', () =>{
    
    modal.classList.remove('active');
})
