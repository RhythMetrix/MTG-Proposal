import React, { useState } from 'react';
import CardsContext from './CardsContext';

const CardsProvider = ({ children }) => {
    const [selectedSet, setSelectedSet] = useState('');
    const [selectedTypes, setSelectedTypes] = useState([]);


    return (
        <CardsContext.Provider value={{ selectedSet, setSelectedSet, selectedTypes, setSelectedTypes }}>
            {children}
        </CardsContext.Provider>
    );
};

export default CardsProvider