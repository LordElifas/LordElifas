let range = document.getElementById("range");
let output = document.getElementById("range_from");
output.innerHTML = range.value; 

range.oninput = () => {
  output.innerHTML = this.value;
}

let sortButtons = document.querySelector('.sorting-buttons');
let sortButton = document.querySelectorAll('.sort__button');
let triangle = document.querySelectorAll('.sort__button__triangle')
let changeClass = el =>{
    for(let i = 0; i<sortButton.length; i++){
        sortButton[i].classList.remove('active');
    }
    el.classList.add('active');
}
let subChange = elem => {
    for(let i = 0; i < triangle.length; i++){
        triangle[i].classList.remove('active');
    }
    elem.classList.add('active');
}
sortButtons.addEventListener('click', e =>{
    if(e.target.classList.contains('sort__button')){
        changeClass(e.target);
    }
    else if(e.target.classList.contains('sort__button__triangle')){
        subChange(e.target);
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

let catalogButtons = document.querySelector('.catalog-buttons');
let catalogButton = document.querySelectorAll('.catalog__button');

let catBtnActive = el => {
    for(let i = 0; i < catalogButton.length; i++){
        catalogButton[i].classList.remove('active');
    }
    el.classList.add('active');
}
catalogButtons.addEventListener('click', e =>{
    if(e.target.classList.contains('catalog__button')){
        catBtnActive(e.target);
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