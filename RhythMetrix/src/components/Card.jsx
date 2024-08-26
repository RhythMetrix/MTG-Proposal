import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { handleFetch } from "../utils";
import NavBar from "./NavBar";

function Card() {
    const { cardId } = useParams();
    const [cardDetails, setCardDetails] = useState(null);
    const [error, setError] = useState(null);
    console.log(cardId)
    useEffect(() => {
        const fetchDetails = async () => {
            const [data, error] = await handleFetch(`https://api.magicthegathering.io/v1/cards/${cardId}`);
            if (data) setCardDetails(data.card)
            if (error) setError(error)
            console.log(data)
        }
        fetchDetails();
    }, [cardId])
    // console.log(error)
    // if (error) {
    //     return <p>Error loading card details: {error}</p>;
    // }

    if (!cardDetails) {
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