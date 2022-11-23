const populate = (playground, dragItems) => {
  for (let j = 0; j < playground.sizeY; j += 1) {
    for (let i = 0; i < playground.sizeX; i += 1) {
      const value = playground.arr[j][i];
      const item = dragItems.items.find((e) => e.y === j && e.x === i);
      if (value > 0) {
        if (!item) {
          const id = dragItems.add(j, i, value);
          dragItems.show(id, j, i);
        }
      } else if (item) {
        dragItems.hide(value, j, i);
      }
    }
  }
};

export default populate;