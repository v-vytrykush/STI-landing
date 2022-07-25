'use strict';

const burger = document.querySelector('#burger');

const menu = document.querySelector('#menu');

const close1 = document.querySelector('#close');

const body = document.querySelector('#body');


document.addEventListener('keydown', function(event){
  if(event.key === "Escape"){
    menu.classList.toggle('disp');
    body.classList.toggle('overflow')
  }
});

burger.addEventListener('click', () => {
  menu.classList.toggle('disp');
  body.classList.toggle('overflow')
})

close1.addEventListener('click', () => {
  menu.classList.toggle('disp');
  body.classList.toggle('overflow')
})

