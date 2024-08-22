import { useState, useEffect } from "react";
import { handleFetch } from "../utils";

function DisplayCards({card}) {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/cards')
            const limitedCards = data.cards.slice(0, 15)
            if (data) setCards(limitedCards)
            if (error) setError(error)
        }
        doFetch();
    }, [])
    console.log(cards)
    return (
        <div className='showcase'>
            <ul>
                {cards.map((card) => (
                    <li>
                        <div>
                            <img key={card.id} src={card.imageUrl} alt={card.name} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayCards