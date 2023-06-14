import gameSlice, {
  initialState,
  resetGame,
  nextMove,
  setCurrentMove
} from "../reducers/gameSlice";

test("initial state", () => {
  const gameStateInit = gameSlice(initialState, { type: "unknown" });
  expect(gameStateInit).toBe(initialState);
});

describe("test reducers", () => {
  const testData = {
    currentMove: 3,
    history: [
      [null, null, null, null, null, null, null, null, null],
      [null, null, "X", null, null, null, null, null, null],
      ["O", null, "X", null, null, null, null, null, null],
      ["O", null, "X", null, "X", null, null, null, null]
    ],
    size: {
      x: 3,
      y: 3
    },
    turn: "O"
  };

  test("resetGame reducer", () => {
    const afterReducerOperation = gameSlice(testData, resetGame(testData));
    expect(afterReducerOperation).toEqual(initialState);
  });

  test("nextMove reducer", () => {
    const nextSquares = ["O", null, "X", null, "X", "O", null, null, null];
    const nextHistory = [
      ...testData.history.slice(0, testData.currentMove + 1),
      nextSquares
    ];
    const afterReducerOperation = gameSlice(
      testData,
      nextMove({ history: nextHistory })
    );
    expect(afterReducerOperation).toEqual({
      ...testData,
      currentMove: testData.currentMove + 1,
      history: nextHistory,
      turn: "X"
    });
  });

  test("setCurrentMove reducer", () => {
    const afterReducerOperation = gameSlice(testData, setCurrentMove(2));
    expect(afterReducerOperation).toEqual({
      ...testData,
      currentMove: 2,
      turn: "X"
    });
  });
});
