import React from 'react'

const Card = ({ card, onClick }) => {
  return (
    <>
    <div
      onClick={() => !card.isFlipped && !card.isMatched && onClick(card)}
      style={{
        width: 80,
        height: 80,
        margin: 10,
        fontSize: 30,
        backgroundColor: card.isFlipped || card.isMatched ? '#fff' : '#444',
        color: card.isFlipped || card.isMatched ? '#000' : '#444',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #222',
        borderRadius: 10,
        cursor: 'pointer',
      }}
    >
      {card.isFlipped || card.isMatched ? card.symbol : "❓"}
    </div>
    </>
  )
}

export default Card