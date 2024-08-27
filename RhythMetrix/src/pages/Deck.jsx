import React, { useContext } from 'react';
import CardsContext from '../context/CardsContext';
import NavBar from '../components/NavBar';
import darkMode from '../assets/darkMode.png'
import lightmode from '../assets/lightmode.png'
import viewIconDark from '../assets/viewIconDark.webp'
import viewIconLight from '../assets/viewIconLight.webp'

function DeckPage() {
    const { deck, theme } = useContext(CardsContext); //importing the state that is holding all of the 'chosen' cards

    return (
        <>
            <NavBar title='Magic of the Gathering' />
            <div>
                <div className="container">
                    <div className="text">
                        <span style={{ '--i': -4, color: theme === 'dark' ? '#ffffff' : '#000000' }}>Y</span>
                        <span style={{ '--i': -3, color: theme === 'dark' ? '#ffffff' : '#000000' }}>O</span>
                        <span style={{ '--i': -4, color: theme === 'dark' ? '#ffffff' : '#000000' }}>U</span>
                        <span style={{ '--i': -1, color: theme === 'dark' ? '#ffffff' : '#000000' }}>R</span>
                        <span style={{ '--i': 0, color: theme === 'dark' ? '#ffffff' : '#000000' }}> </span>
                        <span style={{ '--i': 1, color: theme === 'dark' ? '#ffffff' : '#000000' }}>D</span>
                        <span style={{ '--i': 2, color: theme === 'dark' ? '#ffffff' : '#000000' }}>E</span>
                        <span style={{ '--i': 3, color: theme === 'dark' ? '#ffffff' : '#000000' }}>C</span>
                        <span style={{ '--i': 4, color: theme === 'dark' ? '#ffffff' : '#000000' }}>K</span>

                    </div>
                </div>
                <ul>
                    {deck.map((card, index) => ( //creating a list element for each card to display them
                        <li className='deck' key={index}>
                            <img className='added-card' src={card.imageUrl} alt={card.name} />
                            {/* <p>{card.name}</p> */}
                            <div className="button-container">
                                <img className='view-card' src={theme === 'dark' ? viewIconDark : viewIconLight} alt="Button to view cards" />
                                <img className='minus' src={theme === 'dark' ? lightmode : darkMode} alt="Button to remove cards" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
        </>
    );
}

export default DeckPage;