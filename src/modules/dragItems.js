export default class DragItems {
  constructor() {
    this.items = [];
  }

  getItemById = (id) => {
    const item = this.items.find((e) => e.id === id);
    return item;
  }

  show = (id, y, x) => {
    let teamContainer = '';
    const dragItem = document.createElement('div');
    dragItem.classList.add('drag');
    const item = this.getItemById(id);
    if (item.value === 1) {
      teamContainer = '.team1';
      dragItem.classList.add('colorTeam1');
    } else if (item.value === 2) {
      teamContainer = '.team2';
      dragItem.classList.add('colorTeam2');
    }

    dragItem.setAttribute('draggable', true);
    dragItem.id = id;
    if (x === -1 && y === -1) {
      const dragContainer = document.querySelector(teamContainer);
      dragContainer.appendChild(dragItem);
    } else {
      const dragContainer = document.getElementById(`cell ${x} ${y}`);
      dragContainer.appendChild(dragItem);
    }
  }

  hide = (value, y, x) => {
    let teamContainer = '';
    let item;
    if (value === 0) {
      item = this.items.find((e) => e.x === x && e.y === y);
    } else { // remove from incubator
      item = this.items.find((e) => e.x === x && e.y === y && e.value === value);
    }
    if (item) {
      if (item.value === 1) {
        teamContainer = '.team1';
      } else if (item.value === 2) {
        teamContainer = '.team2';
      }
      const dragItem = document.getElementById(item.id);
      if (x === -1 && y === -1) {
        const dragContainer = document.querySelector(teamContainer);
        dragContainer.removeChild(dragItem);
      } else {
        const dragContainer = document.getElementById(`cell ${x} ${y}`);
        dragContainer.removeChild(dragItem);
        // dragContainer.innerHTML = "";
      }

      this.items = this.items.filter((e) => e.id !== item.id);
    }
  }

  add = (y, x, value) => {
    const currDate = new Date();
    const id = `drag ${`${currDate.getTime()}/${this.items.length}`}`;

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
