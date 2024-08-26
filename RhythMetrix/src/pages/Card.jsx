import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { handleFetch } from "../utils";
import NavBar from "../components/NavBar";

function Card() { //fetching data on indiviual cards based on their multiverse ID 
    const { cardId } = useParams(); // we are getting the ID from the URL that handleClick function in CardShowCase takes users to
    const [cardDetails, setCardDetails] = useState(null); // state for the indiviual card
    const [error, setError] = useState(null);
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
        return <p>Loading...</p>;
    }
    return (
        <>
            <NavBar title={`Magic of the Gathering`} />
            <div>
                <h1>{cardDetails.name}</h1>
                <img src={cardDetails.imageUrl} alt={cardDetails.name} />
                <h2>{cardDetails.set}</h2>
                <h2>{cardDetails.type}</h2>
                <p>{cardDetails.text}</p>
            </div>
        </>
    )
}

export default Card;