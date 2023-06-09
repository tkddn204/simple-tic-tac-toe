import { calculateWinner } from "../controllers/TicTacToe";

export default function GameInfo({ gameStatus }) {
  const winner = calculateWinner(gameStatus.size, gameStatus.squares);
  let out;
  if (winner) {
    out = `Winner: ${winner}`;
  } else if (!gameStatus.squares.includes(null)) {
    out = `Game Over!`;
  } else {
    out = `Next player: ${gameStatus.turn}`;
  }

  return <div className="status">{out}</div>;
}
