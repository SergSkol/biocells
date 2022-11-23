export default class Playground {
  constructor(cols, rows) {
    this.sizeX = cols;
    this.sizeY = rows;
    this.arr = Array.from(Array(this.sizeY), () => new Array(this.sizeX));
  }

  showGrid = () => {
    const dropContainer = document.querySelector('.container-grid');
    for (let j = 0; j < this.sizeY; j += 1) {
      const row = document.createElement('div');
      row.classList.add('drop-target-row');
      dropContainer.appendChild(row);
      for (let i = 0; i < this.sizeX; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('drop-target');
        cell.id = `cell ${i} ${j}`;
        row.appendChild(cell);
      }
    }
  };

  load = (data) => {
    if (data) {
      for (let j = 0; j < this.sizeY; j += 1) {
        for (let i = 0; i < this.sizeX; i += 1) {
          this.arr[j][i] = data[j][i];
        }
      }
    }
  };

  set = (j, i, value) => {
    if (j > -1 && i > -1) {
      this.arr[j][i] = value;
    }
  }

  getCount = (value) => {
    let count = 0;
    for (let j = 0; j < this.sizeY; j += 1) {
      for (let i = 0; i < this.sizeX; i += 1) {
        if (this.arr[j][i] === value) {
          count += 1;
        }
      }
    }
    return count;
  }
}
