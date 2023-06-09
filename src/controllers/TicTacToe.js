function calculateWinner(size, squares) {
  let square, count;
  // 가로
  for (let i = 0; i < size.x; i++) {
    square = squares[i * size.y];
    if (!square) continue;
    count = 0;
    for (let j = 0; j < size.y; j++) {
      count += squares[i * size.y + j] === square ? 1 : 0;
    }
    if (count === size.y) return square;
  }
  // 세로
  for (let i = 0; i < size.y; i++) {
    square = squares[i];
    if (!square) continue;
    count = 0;
    for (let j = 0; j < size.x; j++) {
      count += squares[j * size.x + i] === square ? 1 : 0;
    }
    if (count === size.x) return square;
  }
  // 대각선
  if (size.x === size.y) {
    // 왼쪽대각선
    square = squares[0];
    if (square) {
      count = 0;
      for (let i = 0; i < size.x; i++) {
        count += square === squares[i * size.y + i] ? 1 : 0;
      }
      if (count === size.x) return square;
    }
    // 오른쪽대각선
    square = squares[size.x - 1];
    if (square) {
      count = 0;
      for (let i = 1; i <= size.x; i++) {
        count += square === squares[i * size.y - i] ? 1 : 0;
      }
      if (count === size.x) return square;
    }
  } else {
    let minSize = Math.min(size.x, size.y);
    let xIsBig = size.x > size.y;
    let start = xIsBig ? [0, 1] : [0, size.y];

    // 왼쪽대각선
    for (let i = 0; i < 2; i++) {
      square = squares[start[i]];
      if (!square) continue;
      count = 0;
      for (let i = 0; i < minSize; i++) {
        count += square === squares[i * size.y + i + start[i]] ? 1 : 0;
      }
      if (count === size.x) return square;
    }

    // 오른쪽대각선
    for (let i = 0; i < 2; i++) {
      square = squares[start[i] + size.y - 1];
      if (!square) continue;
      count = 0;
      for (let i = 1; i <= minSize; i++) {
        count += square === squares[i * size.y - i + start[i]] ? 1 : 0;
      }
      if (count === size.x) return square;
    }
  }

  return null;
}

export { calculateWinner };
