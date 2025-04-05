import React, { useState, useEffect } from 'react'
import Card from './Card'
import { generateShuffledCards } from './utils';

const Memory = () => {

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);

    useEffect(() => {
        setCards(generateShuffledCards());
    }, []);

    const handleCardClick = (clickedCard) => {
        if (flippedCards.length === 2) return;

        const newCards = cards.map(card =>
            card.id === clickedCard.id ? { ...card, isFlipped: true } : card
        );
        const newFlipped = [...flippedCards, clickedCard];

        setCards(newCards);
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            const [first, second] = newFlipped;

            if (first.symbol === second.symbol) {
                setCards(prev =>
                    prev.map(card =>
                        card.symbol === first.symbol ? { ...card, isMatched: true } : card
                    )
                );
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setCards(prev =>
                        prev.map(card =>
                            card.id === first.id || card.id === second.id
                                ? { ...card, isFlipped: false }
                                : card
                        )
                    );
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    const resetGame = () => {
        setCards(generateShuffledCards());
        setFlippedCards([]);
    };

    return (
        <>
            <div style={{ padding: 20 }}>
                <h2>🧠 Memory Game</h2>
                <button onClick={resetGame}>🔁 Restart</button>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 430, margin: 'auto' }}>
                    {cards.map(card => (
                        <Card key={card.id} card={card} onClick={handleCardClick} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Memory