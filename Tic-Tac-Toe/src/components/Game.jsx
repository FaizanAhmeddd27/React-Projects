import React, { useState } from 'react';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => { 
    if (board[index] !== null || winner) return; 
    const newBoard = [...board];
    newBoard[index] = isXTurn ? '❌' : '🟢'; 

    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const winnerCombination = handleCheckWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]); 
      return;
    }

    if (!newBoard.includes(null)) {
      setIsDraw(true);
    }
  };

  const handleCheckWinner = (newBoard) => { 
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], 
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], 
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        return combinations[i]; 
      }
    }
    return null;
  };

  const handleResetGame = () => { 
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXTurn(true);
    setIsDraw(false);
  };

  return (
    <div className="game-container">
      <h1 className="game-title">✨ Tic Tac Toe 🎮</h1>

      <div className="board">
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>

      {winner && <div className="message winner">🏆 Winner: {winner}!</div>}
      {isDraw && !winner && <div className="message draw">😲 It's a Draw!</div>}

      <div className="btn-container">
        <button className="reset-btn" onClick={handleResetGame}>🔄 Restart Game</button>
      </div>
    </div>
  );
};

export default Game;
