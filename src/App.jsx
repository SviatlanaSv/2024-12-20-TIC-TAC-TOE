import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [board1, setBoard1] = useState(Array(9).fill(null));
  const [isXNext1, setIsXNext1] = useState(true);
  const [winner1, setWinner1] = useState(null);
  const [draw1, setDraw1] = useState(false);

  const [board2, setBoard2] = useState(Array(9).fill(null));
  const [isXNext2, setIsXNext2] = useState(true);
  const [winner2, setWinner2] = useState(null);
  const [draw2, setDraw2] = useState(false);
  const [robotTurn, setRobotTurn] = useState(false);

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
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const checkDraw = (currentBoard) => {
    return currentBoard.every((cell) => cell !== null);
  };

  const handleClick = (
    index,
    board,
    setBoard,
    isXNext,
    setIsXNext,
    setWinner,
    setDraw,
    isRobot = false
  ) => {
    if (board[index] || winner1 || winner2 || (isRobot && robotTurn)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (checkDraw(newBoard)) {
      setDraw(true);
    } else if (isRobot) {
      setRobotTurn(true);
      setTimeout(() => {
        const robotMove = getBestMove(newBoard, "O");
        if (robotMove !== undefined) {
          newBoard[robotMove] = "O";
          setBoard(newBoard);

          const robotWinner = checkWinner(newBoard);
          if (robotWinner) {
            setWinner(robotWinner);
          } else if (checkDraw(newBoard)) {
            setDraw(true);
          } else {
            setIsXNext(true);
          }
        }
        setRobotTurn(false);
      }, 500);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = (
    setBoard,
    setIsXNext,
    setWinner,
    setDraw,
    isRobot = false
  ) => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setDraw(false);
    if (isRobot) setRobotTurn(false);
  };

  const getBestMove = (board, player) => {
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) return i;
    }
    return null;
  };

  return (
    <div qa-name="tic-tac-toe">
      <h1 qa-name="main-title">TIC TAC TOE</h1>
      <div qa-name="game-container">
        {/* Play with a Friend */}
        <div qa-name="play-with-friend">
          <h2 qa-name="column-title">Play with a Friend</h2>
          <div qa-name="friend-board">
            {board1.map((cell, index) => (
              <div
                key={index}
                qa-name={`friend-cell-${index}`}
                className={`cell ${cell ? "cell-filled" : ""}`}
                onClick={() =>
                  handleClick(
                    index,
                    board1,
                    setBoard1,
                    isXNext1,
                    setIsXNext1,
                    setWinner1,
                    setDraw1
                  )
                }
              >
                {cell}
              </div>
            ))}
          </div>
          {winner1 ? (
            <div qa-name="friend-winner">Winner: {winner1}</div>
          ) : draw1 ? (
            <div qa-name="friend-draw">It's a Draw!</div>
          ) : (
            <div qa-name="friend-turn">Next Turn: {isXNext1 ? "X" : "O"}</div>
          )}
          <button
            qa-name="friend-reset-button"
            onClick={() =>
              resetGame(setBoard1, setIsXNext1, setWinner1, setDraw1)
            }
          >
            Reset Game
          </button>
        </div>

        {/* Play with a Robot */}
        <div qa-name="play-with-robot">
          <h2 qa-name="column-title">Play with a Robot</h2>
          <div qa-name="robot-board">
            {board2.map((cell, index) => (
              <div
                key={index}
                qa-name={`robot-cell-${index}`}
                className={`cell ${cell ? "cell-filled" : ""}`}
                onClick={() =>
                  handleClick(
                    index,
                    board2,
                    setBoard2,
                    isXNext2,
                    setIsXNext2,
                    setWinner2,
                    setDraw2,
                    true
                  )
                }
              >
                {cell}
              </div>
            ))}
          </div>
          {winner2 ? (
            <div qa-name="robot-winner">Winner: {winner2}</div>
          ) : draw2 ? (
            <div qa-name="robot-draw">It's a Draw!</div>
          ) : (
            <div qa-name="robot-turn">Next Turn: {isXNext2 ? "X" : "O"}</div>
          )}
          <button
            qa-name="robot-reset-button"
            onClick={() =>
              resetGame(setBoard2, setIsXNext2, setWinner2, setDraw2, true)
            }
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;


