import { render, screen } from "@testing-library/react";
import Square from "../components/Square";
import userEvent from "@testing-library/user-event";

describe("<Square />", () => {
  const onSquareClick = jest.fn();
  const role = "button";
  const value = 1;
  const setup = () =>
    render(<Square value={value} onSquareClick={onSquareClick} />);
  test("렌더링 시 버튼 하나가 만들어져야함", async () => {
    setup();
    await screen.findByRole(role);

    expect(screen.getByRole(role)).toHaveTextContent(value);
  });

  test("버튼 클릭하면 onSquareClick 함수가 실행되어야 함", async () => {
    setup();
    await screen.findByRole(role);
    userEvent.click(screen.getByText(value));
    expect(onSquareClick).toHaveBeenCalled();
  });
});
