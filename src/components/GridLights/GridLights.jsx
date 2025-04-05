import React, { useState } from 'react'

const GRID_SIZE = 5;

const GridLights = () => {

    const [grid, setGrid] = useState(
        Array(GRID_SIZE).fill(null).map(() =>
          Array(GRID_SIZE).fill(false)
        )
      );
    
    /*  // create a toggle light switch for each
    
    const toggleLight = (row, col) => {
        setGrid(prev =>
          prev.map((r, rIdx) =>
            r.map((cell, cIdx) =>
              rIdx === row && cIdx === col ? !cell : cell
            )
          )
        );
      };
    */


    // Lights Out Logic (Toggle Adjacent Lights)

      const toggleLight = (row, col) => {
        const newGrid = grid.map(row => [...row]);
      
        const toggle = (r, c) => {
          if (r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE) {
            newGrid[r][c] = !newGrid[r][c];
          }
        };
      
        toggle(row, col);         // center
        toggle(row - 1, col);     // top
        toggle(row + 1, col);     // bottom
        toggle(row, col - 1);     // left
        toggle(row, col + 1);     // right
      
        setGrid(newGrid);
      };

  return (
    <>
    <div style={{ padding: 20 }}>
      <h2>💡 Grid Lights</h2>
      <div
        style={{
          display: 'inline-grid',
          gridTemplateColumns: `repeat(${GRID_SIZE}, 60px)`,
          gap: 10,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((isOn, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => toggleLight(rowIndex, colIndex)}
              style={{
                width: 60,
                height: 60,
                backgroundColor: isOn ? '#ffd700' : '#333',
                borderRadius: 8,
                cursor: 'pointer',
                boxShadow: isOn ? '0 0 15px #ffd700' : 'inset 0 0 5px #000',
                transition: '0.2s',
              }}
            />
          ))
        )}
      </div>
    </div>
    </>
  )
}

export default GridLights