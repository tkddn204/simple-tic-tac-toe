import React, { useState } from "react";
import Board from "./Board";
import GameInfo from "./GameInfo";

export default function Game() {
  const size = {
    x: 3,
    y: 3
  };
  const [history, setHistory] = useState([Array(size.x * size.y).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const turn = currentMove % 2 === 1 ? "O" : "X";
  const currentSquares = history[currentMove];

  function resetGame() {
    setHistory([Array(size.x * size.y).fill(null)]);
    setCurrentMove(0);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          gameStatus={{
            size,
            squares: currentSquares,
            turn
          }}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <GameInfo
          gameStatus={{
            size,
            squares: currentSquares,
            turn
          }}
        />
        <ol>{moves}</ol>
      </div>
      <div className="game-button">
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}
