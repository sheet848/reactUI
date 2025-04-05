import React, { useState } from 'react'
import Square from './Square'

const TicTacToe = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  // Function to check for a winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ("X" or "O")
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="text-center">
          <h1 className="text-2xl mb-4">{status}</h1>
          <div className="grid grid-cols-3 gap-1 w-48 mx-auto">
            {squares.map((value, index) => (
              <Square key={index} value={value} onClick={() => handleClick(index)} />
            ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-black rounded"
            onClick={() => setSquares(Array(9).fill(null))}
          >
            Restart Game
          </button>
        </div>
      </div>
    </>
  )
}

export default TicTacToe