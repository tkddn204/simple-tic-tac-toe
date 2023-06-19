import { render, screen } from "@testing-library/react";
import Board from "../components/Board";
import userEvent from "@testing-library/user-event";

describe("<Board />", () => {
  const gameStatus = {
    squares: Array(9).fill(null),
    size: {
      x: 3,
      y: 3
    },
    turn: "X"
  };
  const onPlay = jest.fn();
  const setup = () => render(<Board gameStatus={gameStatus} onPlay={onPlay} />);

  test("렌더링 시 3X3의 버튼들이 만들어져야함", async () => {
    setup();
    expect(screen.getAllByRole("button")).toHaveLength(9);
  });

  test("버튼을 클릭하면 onPlay 함수가 실행되고 바뀐 squares를 받아야 함", async () => {
    setup();
    const buttons = screen.getAllByRole("button");
    for (let i = 0; i < 9; i++) {
      userEvent.click(buttons[i]);
      const nextSquares = Array(9).fill(null);
      nextSquares[i] = "X";
      expect(onPlay).toBeCalledWith(nextSquares);
    }
  });
});
