import React, { useState } from "react";
import Board from "./Board";
import GameInfo from "./GameInfo";

export default function Game() {
  const size = {
    x: 3,
    y: 3
  };
  const [turn, setTurn] = useState("X");
  const [history, setHistory] = useState([Array(size.x * size.y).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setTurn(turn === "X" ? "O" : "X");
  }

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
      </div>
    </div>
  );
}
