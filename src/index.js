// import './style.css';
import Playground from './modules/playground.js';
import Storage from './modules/storage.js';

const storage = new Storage();
const playground = new Playground(8, 8);

const data = storage.load();
playground.load(data);
playground.showGrid();

for (let i = 0; i < 9; i += 1) {
  const dragContainer = document.querySelector('.container-drag');
  const dragItem = document.createElement('div');
  dragItem.classList.add('drag');
  dragItem.setAttribute('draggable', true);
  dragItem.id = `drag ${i}`;
  dragContainer.appendChild(dragItem);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  const dropped = document.getElementById(data);
  ev.target.appendChild(dropped);

  const coordsTo = ev.target.id.split(' ');
  playground.set(coordsTo[0], coordsTo[1], 1);

  storage.save(playground.arr);
}

const drags = document.querySelectorAll('.drag');
drags.forEach((item) => {
  item.addEventListener('dragstart', (event) => {
    drag(event);
  });
});

const dropTargets = document.querySelectorAll('.drop-target');
dropTargets.forEach((item) => {
  item.addEventListener('drop', (event) => {
    drop(event);
  });

  item.addEventListener('dragover', (event) => {
    allowDrop(event);
  });
});
