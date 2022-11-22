import './style.css';
import Playground from './modules/playground.js';
import DragItems from './modules/dragItems.js';
import Storage from './modules/storage.js';

const storage = new Storage();
const playground = new Playground(8, 8);

const data = storage.load();
playground.load(data);
playground.showGrid();

const dragItems = new DragItems();

for (let j = 0; j < playground.sizeX; j += 1) {
  for (let i = 0; i < playground.sizeY; i += 1) {
    if (playground.arr[j][i] === 1) {
      const id = dragItems.add(j, i, 1);
      dragItems.show(id, j, i);
    }
  }
}

const count = playground.getCount(1);
for (let i = 0; i < 8 - count; i += 1) {
  const id = dragItems.add(-1, -1, 1);
  dragItems.show(id, -1, -1);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const id = ev.dataTransfer.getData('text');
  const dropped = document.getElementById(id);

  const item = dragItems.getItemById(id);
  const { x } = item;
  const { y } = item;
  if (x !== -1 && y !== -1) {
    playground.set(x, y, 0);
  }

  dragItems.move(dropped, ev.target);

  const toXY = ev.target.id.split(' ');
  playground.set(parseInt(toXY[1], 10), parseInt(toXY[2], 10), 1);

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
