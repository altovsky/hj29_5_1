'use strict';

let movingObject = null;

function mouseDown(event) {

  if (event.target.classList.contains('logo')) {
    movingObject = event.target;
    movingObject.classList.add('moving');
    movingObject.style.position = 'absolute';
    mouseMove(event);
    document.body.appendChild(movingObject);
  }
}

function mouseMove(event) {

  if (!movingObject) {
    return;
  }

  movingObject.style.left = event.pageX - movingObject.offsetWidth / 2 + 'px';
  movingObject.style.top = event.pageY - movingObject.offsetHeight / 2 + 'px';
}

function mouseUp(event) {

  if (movingObject) {
    movingObject.style.visibility = 'hidden';
    const check = document
      .elementFromPoint(event.clientX, event.clientY)
      .closest('#trash_bin');
    movingObject.style.visibility = 'visible';
    movingObject.classList.remove('moving');

    if (check) {
      movingObject.style.display = 'none';
    }

    movingObject = null;
  }
}

document.addEventListener('mousedown', mouseDown);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('mouseup', mouseUp);
