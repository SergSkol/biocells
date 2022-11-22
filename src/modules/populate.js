const populate = (playground, dragItems) => {
  for (let j = 0; j < playground.sizeX; j += 1) {
    for (let i = 0; i < playground.sizeY; i += 1) {
      const value = playground.arr[j][i];
      const item = dragItems.items.find((e) => e.x === j && e.y === i);
      if (value > 0) {
        if (!item) {
          const id = dragItems.add(j, i, value);
          dragItems.show(id, j, i);
        }
      } else if (item) {
        dragItems.hide(j, i);
      }
    }
  }
};

export default populate;