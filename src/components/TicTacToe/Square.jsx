import React from 'react'

const Square = ({ value, onClick }) => {
  return (
    <>
    <button 
      className="w-16 h-16 text-2xl font-bold border border-gray-600"
      onClick={onClick}
    >
      {value}
    </button>
    </>
  )
}

export default Square