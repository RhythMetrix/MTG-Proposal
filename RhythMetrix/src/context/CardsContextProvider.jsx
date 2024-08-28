import React, { useState } from 'react';
import CardsContext from './CardsContext';
import { useNavigate } from 'react-router-dom';

const CardsProvider = ({ children }) => {
    const [selectedSet, setSelectedSet] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [deck, setDeck] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]); // cards that will be displayed through filters
    const [theme, setTheme] = useState('light'); // using state to toggle between lightmode and darkmode
    const navigate = useNavigate();
    const addToDeck = (card) => {
        setDeck((prevDeck) => {
            // Check if the card is already in the deck
            const isCardInDeck = prevDeck.some((deckCard) => deckCard.id === card.id);

            if (!isCardInDeck) {
                return [...prevDeck, card]; // Add the card if it's not already in the deck
            }

            return prevDeck; // Return the deck unchanged if the card is already present
        });
        console.log(`deck: ${deck}`)
    };

    const handleClick = (cardId) => { // takes users to indiviual card page
        navigate(`/card/${cardId}`)

    }

    return (
        <CardsContext.Provider value={{ selectedSet, setSelectedSet, selectedTypes, setSelectedTypes, deck, addToDeck, filteredCards, setFilteredCards, theme, setTheme, handleClick }}>
            {children}
        </CardsContext.Provider>
    );
};

export default CardsProvider