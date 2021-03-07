
let demo = document.querySelector('.demo');
let requestButton = document.querySelector('.request-button');

requestButton.onclick = function () {
    demo.classList.toggle('hide');
    demo.classList.toggle('shown');
    console.log(demo);
}
let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 1000) {
    upButton.classList.remove('hide');
    upButton.classList.add('show');
  } else {
    upButton.classList.remove('show');
    upButton.classList.add('hide');
  }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};


