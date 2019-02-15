'use strict';

const leftEye = document.querySelector('.cat_position_for_left_eye'),
  rightEye = document.querySelector('.cat_position_for_right_eye'),
  bounds = document.querySelector('.cat').getBoundingClientRect();

document.addEventListener('mousemove', event => {

  if (event.pageX > bounds.right) {
    leftEye.firstElementChild.style.left = 50 + '%';
    rightEye.firstElementChild.style.left = 50 + '%';
  } else if (event.pageX < bounds.left) {
    leftEye.firstElementChild.style.left = 0 + 'px';
    rightEye.firstElementChild.style.left = 0 + 'px';
  } else {
    leftEye.firstElementChild.style.left = 25 + '%';
    rightEye.firstElementChild.style.left = 25 + '%';
  }

  if (event.pageY < bounds.top) {
    leftEye.firstElementChild.style.top = 0 + 'px';
    rightEye.firstElementChild.style.top = 0 + 'px';
  } else if (event.pageY > bounds.bottom) {
    leftEye.firstElementChild.style.top = 50 + '%';
    rightEye.firstElementChild.style.top = 50 + '%';
  } else {
    leftEye.firstElementChild.style.top = 25 + '%';
    rightEye.firstElementChild.style.top = 25 + '%';
  }

});
