export default class DragItems {
  constructor() {
    this.items = [];
  }

  getItemById = (id) => {
    const item = this.items.find((e) => e.id === id);
    return item;
  }

  show = (id, x, y) => {
    let team = '';
    const dragItem = document.createElement('div');
    dragItem.classList.add('drag');
    const item = this.getItemById(id);
    if (item.value === 1) {
      team = '.team1';
      dragItem.classList.add('red');
    } else if (item.value === 2) {
      team = '.team2';
      dragItem.classList.add('blue');
    }

    dragItem.setAttribute('draggable', true);
    dragItem.id = id;
    if (x === -1 && y === -1) {
      const dragContainer = document.querySelector(team);
      dragContainer.appendChild(dragItem);
    } else {
      const dragContainer = document.getElementById(`cell ${x} ${y}`);
      dragContainer.appendChild(dragItem);
    }
  }

  hide = (x, y) => {
    let team = '';
    const item = this.items.find((e) => e.x === x && e.y === y);
    if (item) {
      if (item.value === 1) {
        team = '.team1';
      } else if (item.value === 2) {
        team = '.team2';
      }
      const dragItem = document.getElementById(item.id);
      if (x === -1 && y === -1) {
        const dragContainer = document.querySelector(team);
        dragContainer.removeChild(dragItem);
      } else {
        const dragContainer = document.getElementById(`cell ${x} ${y}`);
        dragContainer.removeChild(dragItem);
      }

      this.items = this.items.filter((e) => e.id !== item.id);
    }
  }

  move = (dropped, target) => {
    const { id } = dropped;
    const item = this.getItemById(id);
    const targetXY = target.id.split(' ');

    target.appendChild(dropped);
    item.x = parseInt(targetXY[1], 10);
    item.y = parseInt(targetXY[2], 10);
  }

  add = (x, y, value) => {
    const id = `drag ${Date.now() + this.items.length}`;

    const item = {
      id,
      x,
      y,
      value,
    };
    this.items.push(item);

    return id;
  };
}
