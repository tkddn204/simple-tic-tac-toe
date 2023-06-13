import { calculateWinner } from "../controllers/TicTacToe";

test("우승자가 없어야 함", () => {
  const size = { x: 3, y: 3 };
  const emptySqaures = Array(size.x * size.y).fill(null);

  const oneXSqaures = emptySqaures.slice();
  oneXSqaures[3] = "X";

  const oneOSqaures = emptySqaures.slice();
  oneOSqaures[6] = "O";

  const mockSquares = [emptySqaures, oneXSqaures, oneOSqaures];
  mockSquares.forEach(s => expect(calculateWinner(size, s)).toBeNull());
});

test("가로 3개가 있을 경우 우승", () => {
  const size = { x: 3, y: 3 };

  const firstXSqaures = ["X", "X", "X", ...Array(6).fill(null)];
  expect(calculateWinner(size, firstXSqaures)).toBe("X");
  const secondOSqaures = [
    ...Array(3).fill(null),
    "O",
    "O",
    "O",
    ...Array(3).fill(null)
  ];
  expect(calculateWinner(size, secondOSqaures)).toBe("O");
  const thirdXSqaures = [...Array(6).fill(null), "X", "X", "X"];
  expect(calculateWinner(size, thirdXSqaures)).toBe("X");
});

test("세로 3개가 있을 경우 우승", () => {
  const size = { x: 3, y: 3 };

  const firstOSqaures = ["O", null, null, "O", null, null, "O", null, null];
  expect(calculateWinner(size, firstOSqaures)).toBe("O");
  const secondOSqaures = [null, "O", null, null, "O", null, null, "O", null];
  expect(calculateWinner(size, secondOSqaures)).toBe("O");
  const thirdXSqaures = [null, null, "X", null, null, "X", null, null, "X"];
  expect(calculateWinner(size, thirdXSqaures)).toBe("X");
});

test("대각선 3개가 있을 경우 우승", () => {
  const size = { x: 3, y: 3 };

  const leftOSqaures = ["O", null, null, null, "O", null, null, null, "O"];
  expect(calculateWinner(size, leftOSqaures)).toBe("O");
  const rightXSqaures = [null, null, "X", null, "X", null, "X", null, null];
  expect(calculateWinner(size, rightXSqaures)).toBe("X");
});
