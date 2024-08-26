import React, { useContext } from 'react';
import CardsContext from '../context/CardsContext';
import { handleFetch } from '../utils';

const RandomizerButton = () => {
    const { setFilteredCards } = useContext(CardsContext);

    const fetchRandomCards = async () => {
        const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/cards');
        if (error) {
            console.error('Error fetching random cards:', error);
            return;
        }

        const limitedCards = [];
        const trackName = new Set();
        for (let i = 0; i < data.cards.length && limitedCards.length < 50; i++) {
            let card = data.cards[Math.floor(Math.random() * data.cards.length)];
            if (!trackName.has(card.name) && card.imageUrl) {
                trackName.add(card.name);
                limitedCards.push(card);
            }
        }
        setFilteredCards(limitedCards); // Set random cards in filtered cards
    };

    return (
        <button onClick={fetchRandomCards} className="randomize-button">
            Randomize Cards
        </button>
    );
};

export default RandomizerButton;
