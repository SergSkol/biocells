const calcPlayground = (playGround) => {
  const { sizeX } = playGround;
  const { sizeY } = playGround;

  const usingBounds = (arr, j, i) => {
    if (j < 0 || i < 0) {
      return 0;
    } if (j >= sizeX) {
      return 0;
    } if (i >= sizeY) {
      return 0;
    } if (arr[j][i] > 0) {
      return 1;
    }
    return 0;
  };

  const { arr } = playGround;
  const arrNeib = Array.from(Array(sizeX), () => new Array(sizeY));

  for (let j = 0; j < sizeX; j += 1) {
    for (let i = 0; i < sizeY; i += 1) {
      let sum = 0;
      sum += usingBounds(arr, j - 1, i);
      sum += usingBounds(arr, j - 1, i - 1);
      sum += usingBounds(arr, j, i - 1);
      sum += usingBounds(arr, j + 1, i);
      sum += usingBounds(arr, j + 1, i + 1);
      sum += usingBounds(arr, j, i + 1);
      sum += usingBounds(arr, j - 1, i + 1);
      sum += usingBounds(arr, j + 1, i - 1);

      arrNeib[j][i] = sum;
    }
  }

  for (let j = 0; j < sizeX; j += 1) {
    for (let i = 0; i < sizeY; i += 1) {
      const neib = arrNeib[j][i];

      if ((neib < 2) || (neib > 3)) {
        arr[j][i] = 0;
      }

      if (arr[j][i] === 0 || arr[j][i] === null) {
        if (neib === 3) {
          arr[j][i] = 1;
        } else {
          arr[j][i] = 0;
        }
      }
    }
  }

  return arr;
};

export default calcPlayground;