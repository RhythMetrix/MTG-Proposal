import React, { useState } from 'react';
import CardsContext from './CardsContext';

const CardsProvider = ({ children }) => {
    const [selectedSet, setSelectedSet] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [deck, setDeck] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]); // cards that will be displayed through filters
    const [theme, setTheme] = useState('light');

    const addToDeck = (card) => {
        setDeck(prevDeck => [...prevDeck, card]);
        console.log(`deck: ${deck}`)
    };


    return (
        <CardsContext.Provider value={{ selectedSet, setSelectedSet, selectedTypes, setSelectedTypes, deck, addToDeck, filteredCards, setFilteredCards, theme, setTheme }}>
            {children}
        </CardsContext.Provider>
    );
};

export default CardsProvider