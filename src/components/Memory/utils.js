// utils.js
export const generateShuffledCards = () => {
    const symbols = ["🍕", "🍔", "🍟", "🍣", "🍩", "🍪", "🍓", "🍉"];
    const deck = [...symbols, ...symbols]
        .sort(() => 0.5 - Math.random())
        .map((symbol, index) => ({
            id: index,
            symbol,
            isFlipped: false,
            isMatched: false,
        }));

    return deck;
};
