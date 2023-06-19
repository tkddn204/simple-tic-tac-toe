import Square from "./Square";
import { calculateWinner } from "../controllers/TicTacToe";
import { useCallback } from "react";

export default function Board({ gameStatus, onPlay }) {
  const { size, turn, squares } = gameStatus;
  const handleClick = useCallback(
    idx => {
      if (squares[idx] || calculateWinner(size, squares)) return;
      const nextSquares = squares.slice();
      nextSquares[idx] = turn;
      onPlay(nextSquares);
    },
    [onPlay, size, turn, squares]
  );

  return (
    <>
      {[...Array(size.x)].map((_, i) => (
        <div key={`board-x${i}`} className="board-row">
          {[...Array(size.y)].map((_, j) => {
            let idx = i * size.y + j;
            return (
              <Square
                key={`board-y${idx}`}
                value={squares[idx]}
                onSquareClick={() => handleClick(idx)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
