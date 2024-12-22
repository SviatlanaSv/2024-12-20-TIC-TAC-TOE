import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (currentBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe" data-qa="tic-tac-toe">
      <h1 className="game-title" data-qa="game-title">Tic Tac Toe</h1>
      <div className="board" data-qa="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? "cell-filled" : ""}`}
            data-qa={`cell-${index}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {winner ? (
        <div className="winner" data-qa="winner">
          Winner: {winner}
        </div>
      ) : (
        <div className="turn" data-qa="turn">
          Next Turn: {isXNext ? "X" : "O"}
        </div>
      )}
      <button className="reset-button" data-qa="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default App;
