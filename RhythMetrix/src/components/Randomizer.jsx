import React, { useContext } from 'react';
import CardsContext from '../context/CardsContext';
import { handleFetch } from '../utils';

const RandomizerButton = () => { //This is the same logic as the intial card load up in Cardshowcase
    const { setFilteredCards, filteredCards } = useContext(CardsContext);

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
        setFilteredCards([...limitedCards]); // Set random cards in filtered cards
        console.log(`filteredCards: ${filteredCards}`)
    };

    return (
        <button onClick={fetchRandomCards} className="randomize-button">
            Get a new set of randomized cards
        </button>
    );
};

export default RandomizerButton;
