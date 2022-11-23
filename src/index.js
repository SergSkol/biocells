import './style.css';
import Playground from './modules/playground.js';
import DragItems from './modules/dragItems.js';
import Storage from './modules/storage.js';
import populate from './modules/populate.js';
import calcPlayground from './modules/logic.js';

let playgroundColumns = 8;
let playgroundRows = 8;
let dragItemsNumber = 8;
let refreshIntervalId;
let stepCount = 0;

const storage = new Storage();
const playground = new Playground(playgroundColumns, playgroundRows);

const stepCountDOM = document.querySelector('#step-count');

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
  const item = dragItems.getItemById(id);

  // console.log(ev.target, item); // debug

  const fromX = item.x;
  const fromY = item.y;
  const { value } = item;
  const toXY = ev.target.id.split(' '); // "cell 1 2"
  if (toXY[0] === 'cell') {
    const toX = parseInt(toXY[1], 10);
    const toY = parseInt(toXY[2], 10);

    playground.set(fromY, fromX, 0);
    playground.set(toY, toX, value);

    const newId = dragItems.add(toY, toX, value);
    dragItems.show(newId, toY, toX);
    dragItems.hide(value, fromY, fromX);

    storage.save(playground.arr);
  }
}

const run = () => {
  playground.arr = calcPlayground(playground).slice();
  storage.save(playground.arr);

  populate(playground, dragItems);

  stepCount += 1;
  stepCountDOM.innerHTML = `Generation : ${stepCount}`;
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
  window.location.reload();
});

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
  refreshIntervalId = setInterval(run, 500);
  startBtn.classList.add('activated');
});

const stopBtn = document.querySelector('.stop-btn');
stopBtn.addEventListener('click', () => {
  clearInterval(refreshIntervalId);
  startBtn.classList.remove('activated');
});

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
  storage.remove();
  window.location.reload();
});

const settingsOpenBtn = document.querySelector('.header-settings-open');
settingsOpenBtn.addEventListener('click', () => {
  const popupSettings = document.querySelector('.popup-settings');
  popupSettings.classList.toggle('hide');
});

const settingsCloseBtn = document.querySelector('.popup-settings-close');
settingsCloseBtn.addEventListener('click', () => {
  const popupSettings = document.querySelector('.popup-settings');
  popupSettings.classList.toggle('hide');
});

const settingsSaveBtn = document.querySelector('.popup-settings-save');
settingsSaveBtn.addEventListener('click', () => {
  const popupSettings = document.querySelector('.popup-settings');
  popupSettings.classList.toggle('hide');

  const playgroundSize = document.querySelector('#playgroundSize');

  playgroundColumns = playgroundSize.value;
  playgroundRows = playgroundSize.value;
  dragItemsNumber = playgroundSize.value;
});
