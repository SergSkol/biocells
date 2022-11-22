export default class DragItems {
  constructor() {
    this.items = [];
  }

  show = (id, x, y) => {
    const dragItem = document.createElement('div');
    dragItem.classList.add('drag');
    dragItem.setAttribute('draggable', true);
    dragItem.id = id;
    if (x === -1 && y === -1) {
      const dragContainer = document.querySelector('.container-drag');
      dragContainer.appendChild(dragItem);
    } else {
      const dragContainer = document.getElementById(`cell ${x} ${y}`);
      dragContainer.appendChild(dragItem);
    }
  }

  getItemById = (id) => {
    const itemById = this.items.find((e) => e.id === id);
    return itemById;
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
    const id = `drag ${this.items.length}`;

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
