export default class Playground {
  constructor(sizeX, sizeY) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.arr = Array.from(Array(sizeX), () => new Array(sizeY));
  }

  showGrid = () => {
    const dropContainer = document.querySelector('.container-grid');
    for(let j=0;j<this.sizeX;j+=1){
      const row = document.createElement("div");
      row.classList.add("drop-target-row");
      dropContainer.appendChild(row);
      for (let i=0;i<this.sizeY;i+=1) {
        const cell = document.createElement("div");
        cell.classList.add("drop-target");
        cell.id = j+" "+i;
        row.appendChild(cell);
      }
    }
  };

  load = (data) => {
    if (data) {
      for(let j=0;j<this.sizeX;j+=1){
        for (let i=0;i<this.sizeY;i+=1) {
          this.arr[j][i] = data[j][i];
        }
      }  
    }
  };

  set = (j, i, value) => {
    this.arr[j][i] = value;
  } 
}
