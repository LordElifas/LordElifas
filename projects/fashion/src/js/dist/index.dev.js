"use strict";

var btnHide = document.querySelector('.btnHide');
var btnShow = document.querySelector('.btnShow');
var text = document.querySelector('.text');
btnHide.addEventListener('click', function () {
  var handler = function handler() {
    text.style.display = 'none';
    text.classList.remove('text-leave');
    text.removeEventListener('transitionend', handler);
  };

  text.classList.add('text-leave');
  text.addEventListener('transitionend', handler);
});
btnShow.addEventListener('click', function () {
  var handler = function handler() {
    text.classList.remove('text-enter-active');
    text.removeEventListener('transitionend', shower);
  };

  text.style.display = 'block';
  text.classList.add('text-enter');
  raf(function () {
    text.classList.add('text-enter-active');
    text.classList.remove('text-enter');
  });
  text.addEventListener('transitionend', handler);
});

function raf(fn) {
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      fn();
    });
  });
}