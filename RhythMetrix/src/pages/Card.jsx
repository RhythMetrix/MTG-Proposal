import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { handleFetch } from "../utils";
import NavBar from "../components/NavBar";
import addIconLight from '../assets/addIconLight.webp'
import CardsContext from "../context/CardsContext";

function Card() { //fetching data on indiviual cards based on their multiverse ID 
    const { cardId } = useParams(); // we are getting the ID from the URL that handleClick function in CardShowCase takes users to
    const [cardDetails, setCardDetails] = useState(null); // state for the indiviual card
    const [error, setError] = useState(null);
    const { addToDeck } = useContext(CardsContext);
    console.log(cardId) // just making sure we are getting the correct id
    useEffect(() => {
        const fetchDetails = async () => {
            const [data, error] = await handleFetch(`https://api.magicthegathering.io/v1/cards/${cardId}`);
            if (data) setCardDetails(data.card)
            if (error) setError(error)
            console.log(data)
        }
        fetchDetails();
    }, [cardId])


    if (!cardDetails) { // the API can be slow so this will let users know that the card **will** load
        return (
            <div className="loading">
                <p className='loadingText'>Loading your card...</p>;
            </div>
        )
    }
    return (
        <>
            <NavBar title={`Magic of the Gathering`} />
            <div className="indiviualCard">
                <p>Hover over the card for details</p>
                <div className="cardContainer">
                    <img src={cardDetails.imageUrl} alt={cardDetails.name} />
                    <div className="hiddenInfo">
                        <h1>{cardDetails.name}</h1>
                        <h2>Card's Set: {cardDetails.set}</h2>
                        <h2>{cardDetails.type}</h2>
                        <p>Description: {cardDetails.text}</p>
                    </div>

                </div>
            </div>
            <div className="hiddenInfoTwo">
                <h1>Add this card to your deck?</h1>
                <img src={addIconLight} alt="" onClick={addToDeck(cardDetails)} />
            </div>
        </>
    )
}

export default Card;