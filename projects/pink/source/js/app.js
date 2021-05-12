let nav = document.querySelector('.main-nav');
let navList = document.querySelector('.site-list');
let navBtn = document.querySelector('.main-nav__toggle');

navBtn.addEventListener('click', ()=> {
  nav.classList.toggle('main-nav_closed');
  nav.classList.toggle('main-nav_opened');
})
