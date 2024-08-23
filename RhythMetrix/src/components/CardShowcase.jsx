import { useState, useEffect } from "react";
import { handleFetch } from "../utils";

function DisplayCards() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/cards')
            const limitedCards = [];
            const trackCmc = new Set();
            for (let i = 0; i < data.cards.length && limitedCards.length < 15; i++) {
                let card = data.cards[Math.floor(Math.random() * (data.cards.length))];
                console.log(card.name)
                if (!trackCmc.has(card.name) && card.imageUrl) {
                    trackCmc.add(card.name)
                    limitedCards.push(card)
                }
                console.log(limitedCards)
            }
            // const limitedCards = data.cards.slice(0, 15)

            if (data) setCards(limitedCards)
            if (error) setError(error)
        }
        doFetch();
    }, [])
    // console.log(`cards: ${cards}`)
    return (
        <div className='showcase'>
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        <div>
                            <img src={card.imageUrl} alt={card.name} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayCards