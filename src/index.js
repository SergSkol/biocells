import './style.css';
import Playground from './modules/playground.js';
import DragItems from './modules/dragItems.js';
import Storage from './modules/storage.js';
import populate from './modules/populate.js';
import calcPlayground from './modules/logic.js';

const playgroundSize = 8;
const dragItemsNumber = 8;
const storage = new Storage();
const playground = new Playground(playgroundSize, playgroundSize);

const data = storage.load();
playground.load(data);
playground.showGrid();

const dragItems = new DragItems();

populate(playground, dragItems);

const count1 = playground.getCount(1);
for (let i = 0; i < dragItemsNumber - count1; i += 1) {
  const id = dragItems.add(-1, -1, 1);
  dragItems.show(id, -1, -1);
}

const count2 = playground.getCount(2);
for (let i = 0; i < dragItemsNumber - count2; i += 1) {
  const id = dragItems.add(-1, -1, 2);
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

  const toXY = ev.target.id.split(' ');
  if (toXY[0] === 'cell') {
    const item = dragItems.getItemById(id);
    const { x } = item;
    const { y } = item;
    // console.log(item,x,y)
    if (x > 0 && y > 0) {
      playground.set(x, y, 0);
    }
    dragItems.move(dropped, ev.target);
    playground.set(parseInt(toXY[1], 10), parseInt(toXY[2], 10), item.value);
  }

  storage.save(playground.arr);
}

const run = () => {
  playground.arr = calcPlayground(playground).slice();
  storage.save(playground.arr);

  populate(playground, dragItems);

  // Need to remove this line, and fix reflection
  // window.location.reload();
};

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

const stepBtn = document.querySelector('.step-btn');
stepBtn.addEventListener('click', () => {
  run();
});

let refreshIntervalId;

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
  refreshIntervalId = setInterval(run, 500);
});

const stopBtn = document.querySelector('.stop-btn');
stopBtn.addEventListener('click', () => {
  clearInterval(refreshIntervalId);
});

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
  storage.remove();
  window.location.reload();
});
