import { useState, useEffect, useContext } from "react";
import { handleFetch } from "../utils";
import { useNavigate } from 'react-router-dom';
// import Card from "../context/CardsContextProvider";
import CardsContext from "../context/CardsContext";

function DisplayCards() {
    const [allCards, setAllCards] = useState([]);
    const [randomCards, setRandomCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const { selectedSet, selectedTypes } = useContext(CardsContext);
    // const [selectedCards, setSelectedCards] = useState([]);
    const navigate = useNavigate();
    // console.log(selectedSet)
    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/cards')
            const limitedCards = [];
            const trackCmc = new Set();
            for (let i = 0; i < data.cards.length && limitedCards.length < 15; i++) {
                let card = data.cards[Math.floor(Math.random() * (data.cards.length))];
                // console.log(card.name)
                if (!trackCmc.has(card.name) && card.imageUrl) {
                    trackCmc.add(card.name)
                    limitedCards.push(card)
                }
                // console.log(limitedCards)
            }
            // const limitedCards = data.cards.slice(0, 15)

            if (data) {
                setRandomCards(limitedCards)
                setAllCards(data.cards)
            }
            if (error) setError(error)
        }
        doFetch();
    }, [])

    useEffect(() => {
        const applyFilters = () => {
            console.log(selectedSet)
            // console.log(allCards)
            let result = [...allCards]
            if (selectedSet) {
                result = (result.filter(card => card.setName === selectedSet));
            }

            if (selectedTypes.length > 0) {
                result = result.filter(card =>
                    selectedTypes.some(type => card.types.includes(type) && card.imageUrl))
            }
            setFilteredCards(result)
        };
        applyFilters();
    }, [selectedSet, selectedTypes]);
    console.log(`filter: ${filteredCards}`)
    console.log(`hi: ${selectedSet, selectedTypes}`)
    // console.log(`cards: ${cards}`)
    const handleClick = (cardId) => {
        // setSelectedCards(card)
        navigate(`/card/${cardId}`)

    }
    return (
        <div className='showcase'>
            <ul>
                {(selectedSet || selectedTypes.length > 0 ? filteredCards : randomCards).map((card) => (
                    <li key={card.id} onClick={() => handleClick(card.multiverseid)}>
                        <div>
                            <img src={card.imageUrl} alt={card.name} />
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default DisplayCards