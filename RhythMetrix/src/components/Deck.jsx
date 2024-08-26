import React, { useContext } from 'react';
import CardsContext from '../context/CardsContext';
import NavBar from './NavBar';

function DeckPage() {
    const { deck } = useContext(CardsContext);

    return (
        <>
            <NavBar title='Magic of the Gathering' />
            <div>
                <h2>Your Deck</h2>
                <ul>
                    {deck.map((card, index) => (
                        <li key={index}>
                            <img src={card.imageUrl} alt={card.name} />
                            <p>{card.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default DeckPage;