import React from "react";
import Board from "./Board";
import GameInfo from "./GameInfo";
import { useDispatch, useSelector } from "react-redux";
import { resetGame, nextMove, setCurrentMove } from "../reducers/gameSlice";

export default function Game() {
  const { currentMove, history, size, turn } = useSelector(state => state.game);
  const dispatch = useDispatch();

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    dispatch(nextMove({ history: nextHistory }));
  }

  function jumpTo(nextMove) {
    dispatch(setCurrentMove({ currentMove: nextMove }));
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }

    return (
      <li key={`move${move}`}>
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
        <button onClick={() => dispatch(resetGame())}>Reset</button>
      </div>
    </div>
  );
}
