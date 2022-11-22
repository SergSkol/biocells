const calcPlayground = (playGround) => {
  const { sizeX } = playGround;
  const { sizeY } = playGround;
  const { arr } = playGround;

  const usingBounds = (team, arr, j, i) => {
    if (j < 0 || i < 0) {
      return 0;
    } if (j >= sizeX) {
      return 0;
    } if (i >= sizeY) {
      return 0;
    } if (arr[j][i] > 0 && arr[j][i] === team) {
      return 1;
    }
    return 0;
  };

  const getNeib = (team) => {
    const arrNeib = Array.from(Array(sizeX), () => new Array(sizeY));

    for (let j = 0; j < sizeX; j += 1) {
      for (let i = 0; i < sizeY; i += 1) {
        let sum = 0;
        sum += usingBounds(team, arr, j - 1, i);
        sum += usingBounds(team, arr, j - 1, i - 1);
        sum += usingBounds(team, arr, j, i - 1);
        sum += usingBounds(team, arr, j + 1, i);
        sum += usingBounds(team, arr, j + 1, i + 1);
        sum += usingBounds(team, arr, j, i + 1);
        sum += usingBounds(team, arr, j - 1, i + 1);
        sum += usingBounds(team, arr, j + 1, i - 1);

        arrNeib[j][i] = sum;
      }
    }
    return arrNeib;
  };

  const getNewCell = (team, cell, neib) => {
    if ((neib < 2) || (neib > 3)) {
      return 0;
    }

    if (cell === 0 || cell === null || cell === undefined) {
      if (neib === 3) {
        return team;
      }
      return 0;
    }
    return team;
  };

  const arrNeib1 = getNeib(1);
  const arrNeib2 = getNeib(2);

  for (let j = 0; j < sizeX; j += 1) {
    for (let i = 0; i < sizeY; i += 1) {
      const cell = arr[j][i];
      const neib1 = arrNeib1[j][i];
      const neib2 = arrNeib2[j][i];

      const newCell1 = getNewCell(1, cell, neib1);
      const newCell2 = getNewCell(2, cell, neib2);

      let newCell = 0;
      if (newCell1 === 0) {
        newCell = newCell2;
      } else {
        newCell = newCell1;
      }

      if (newCell1 !== 0 && newCell2 !== 0) {
        newCell = 0;
      }

      arr[j][i] = newCell;
    }
  }

  return arr;
};

export default calcPlayground;