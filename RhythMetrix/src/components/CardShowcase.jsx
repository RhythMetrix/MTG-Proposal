import { useState, useEffect, useContext } from "react";
import { handleFetch } from "../utils";
import { useNavigate } from 'react-router-dom';
// import Card from "../context/CardsContextProvider";
import addIconDark from '../assets/addIconDark.webp'
import addIconLight from '../assets/addIconLight.webp'
import viewIconDark from '../assets/viewIconDark.webp'
import viewIconLight from '../assets/viewIconLight.webp'
import theme from './NavBar'

import CardsContext from "../context/CardsContext";

function DisplayCards() {
    const [allCards, setAllCards] = useState([]); // cards that will be filtered
    const [randomCards, setRandomCards] = useState([]); // cards that will be displayed on homepage upon first load
    // const [filteredCards, setFilteredCards] = useState([]); // cards that will be displayed through filters
    const { selectedSet, selectedTypes, addToDeck, filteredCards, setFilteredCards } = useContext(CardsContext);
    const navigate = useNavigate(); // for navigating between pages

    //Fetching 50 random cards to display at the beginning of a reload
    const fetchRandomCards = async () => {
        const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/cards')
        const limitedCards = [];
        const trackName = new Set(); //Set is used to catch duplicates within the API
        for (let i = 0; i < data.cards.length && limitedCards.length < 50; i++) { //loop through data array until our desired number of cards
            let card = data.cards[Math.floor(Math.random() * (data.cards.length))]; //randomizing the card chosen
            // console.log(card.name)
            if (!trackName.has(card.name) && card.imageUrl) { // making sure the card has an image property
                trackName.add(card.name) //add to set to keep track of what cards have been used
                limitedCards.push(card) // add to array which will be displayed
            }
        }
        if (data) {
            setRandomCards(limitedCards) //setting state for the cards that will be displayed
            // setAllCards(data.cards)
            setFilteredCards(data.cards)
            console.log(allCards)
        }
        if (error) setError(error)
    };
    useEffect(() => {
        // const doFetch = async () => {
        //     const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/cards')
        //     const limitedCards = [];
        //     const trackName = new Set(); //Set is used to catch duplicates within the API
        //     for (let i = 0; i < data.cards.length && limitedCards.length < 50; i++) { //loop through data array until our desired number of cards
        //         let card = data.cards[Math.floor(Math.random() * (data.cards.length))]; //randomizing the card chosen
        //         // console.log(card.name)
        //         if (!trackName.has(card.name) && card.imageUrl) { // making sure the card has an image property
        //             trackName.add(card.name) //add to set to keep track of what cards have been used
        //             limitedCards.push(card) // add to array which will be displayed
        //         }
        //     }
        //     if (data) {
        //         setRandomCards(limitedCards) //setting state for the cards that will be displayed
        //         // setAllCards(data.cards)
        //         setFilteredCards(data.cards)
        //         console.log(allCards)
        //     }
        //     if (error) setError(error)
        // }
        fetchRandomCards();
    }, [])

    useEffect(() => {
        const applyFilters = () => {
            // console.log(selectedSet)
            // console.log(allCards)
            // if (allCards.length === 0) { //for debugging purposes... to see if the state is being kept so that there are cards to filter through
            //     console.log("Skipping filter, no cards available yet.");
            //     return;
            // }
            if (filteredCards.length === 0) { // If no cards available to filter
                return;
            }
            let result = [...filteredCards];
            if (selectedSet) {
                result = result.filter(card => card.set === selectedSet);
            }
            if (selectedTypes.length > 0) {
                result = result.filter(card =>
                    selectedTypes.some(type => card.types.includes(type)) && card.imageUrl
                );
            }
            setFilteredCards(result);
            //     let result = [...filteredCards] || [...allCards]
            //     console.log(`Filtering with Selected Set: ${selectedSet}`);
            //     if (result.length > 0) {
            //         console.log("Sample card set values:", result.map(card => card.set).slice(0, 10)); // Log first 10 sets
            //     }

            //     if (selectedTypes.length > 0) { // filtering the cards based on what type is selected
            //         result = result.filter(card =>
            //             selectedTypes.some(type => card.types.includes(type) && card.imageUrl)) //users can selected multiple types so we are checking if the card has at least one of those types
            //     }
            //     console.log("Filtered Result:", result)
            //     setFilteredCards(result)
        };
        if (selectedSet || selectedTypes.length > 0) {
            applyFilters();
            // applyFilters();
        }
    }, [selectedSet, selectedTypes, filteredCards, setFilteredCards]);

    const handleClick = (cardId) => { // takes users to indiviual card page
        navigate(`/card/${cardId}`)

    }
    return (
        <div className='showcase'>
            <ul>
                {(selectedSet || selectedTypes.length > 0 ? filteredCards : randomCards).map((card) => (
                    <li key={card.id}>
                        <div class="card-container">
                            <img src={card.imageUrl} alt={card.name} />
                            <div className ="button-container">
                                <input type="image" src = {theme === 'Dark' ? viewIconDark : viewIconLight} class="view-card" onClick={() => handleClick(card.multiverseid)}></input>
                                <input type="image" src={addIconLight}  class="add-to-deck" onClick={() => addToDeck(card)} ></input>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

        </div >
    )
}

export default DisplayCards