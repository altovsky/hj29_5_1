'use strict';

function debounce(callback, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      callback();
    }, delay);
  };
}

const textArea = document.querySelector('.textarea');
const message = document.querySelector('.message');
const block = document.querySelector('.block');

textArea.addEventListener('input', () => {
  block.classList.add('active');
  message.classList.remove('view');
});

textArea.addEventListener('keydown', debounce(() => {
  message.classList.add('view');
  block.classList.remove('active');
}, 2000));

textArea.addEventListener('focus', () => {
  block.classList.add('active')
});

textArea.addEventListener('blur', () => {
  block.classList.add('active');
  message.classList.remove('view');
});
