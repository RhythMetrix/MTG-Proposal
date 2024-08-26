import React, { useContext } from 'react';
import CardsContext from '../context/CardsContext';
import NavBar from '../components/NavBar';

function DeckPage() {
    const { deck } = useContext(CardsContext); //importing the state that is holding all of the 'chosen' cards

    return (
        <>
            <NavBar title='Magic of the Gathering' />
            <div>
                <h2>Your Deck</h2>
                <ul>
                    {deck.map((card, index) => ( //creating a list element for each card to display them
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