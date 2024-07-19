import React, { useState } from 'react';
import './App.css';

const INITIAL_STATE = {
  squares: Array(9).fill(null),
  xIsNext: Math.random() < 0.5, // Randomly assign true or false
  winner: null,
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const App = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleClick = (i) => {
    if (state.winner || state.squares[i]) {
      return;
    }

    const squares = [...state.squares];
    squares[i] = state.xIsNext ? 'X' : 'O';

    setState({
      squares: squares,
      xIsNext: !state.xIsNext,
      winner: calculateWinner(squares),
    });
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {state.squares[i]}
      </button>
    );
  };

  const resetGame = () => {
    setState({
      squares: Array(9).fill(null),
      xIsNext: Math.random() < 0.5, // Randomly assign true or false
      winner: null,
    });
  };

  let status;
  if (state.winner) {
    status = `Winner: ${state.winner}`;
  } else {
    status = `Next player: ${state.xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Tic-Tac-Toe Game</h1>
      </header>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default App;
