import { useState, useEffect, useContext } from "react";
import { handleFetch } from "../utils";
import CardsContext from "../context/CardsContext";

function CardFilter() {
    const [sets, setSets] = useState([]);
    const { selectedSet, setSelectedSet, selectedTypes, setSelectedTypes } = useContext(CardsContext);
    const [error, setError] = useState('');
    const types = [ // hand selected types we will allow users to choose from to filter their cards
        "Artifact",
        "Conspiracy",
        "Creature",
        "Enchantment",
        "Instant",
        "Land",
        "Phenomenon",
        "Plane",
        "Planeswalker",
        "Scheme",
        "Sorcery",
        "Tribal",
        "Vanguard"
    ];

    useEffect(() => { //fetching existing sets from the API that will allow users to filter cards
        const initialFetch = async () => {
            const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/sets');
            const limitedSets = data.sets.slice(0, 10); //limiting to 10 sets
            if (data) setSets(limitedSets)
            if (error) setError(error)
        }
        initialFetch()
    }, [])

    const handleSetChange = (event) => { // To handle changes to drop down menu --> adjusts state for filtering purposes
        setSelectedSet(event.target.value);
        console.log(`set: ${selectedSet}`)
    };

    const handleCheckboxChange = (event) => { //Keeps track of what is selected and what is not --> again adjusting state for filtering purposes
        const { value, checked } = event.target;
        if (checked) {
            setSelectedTypes([...selectedTypes, value]);
        } else {
            setSelectedTypes(selectedTypes.filter(type => type !== value));
        }
    };

    return (
        <fieldset>
            <legend>Filter the cards</legend>
            <form>
                <p>
                    Sets
                </p>
                <label htmlFor="Sets">Choose a set:</label>
                <select name="Sets" id="Sets" value={selectedSet} onChange={handleSetChange}>
                    {sets.map((set) => (
                        <option value={set.code}>{set.name}</option>
                    ))}
                </select>
                <p> Types </p>
                {types.map((type) => (
                    <div key={type}>
                        <input type="checkbox"
                            value={type}
                            name={type}
                            onChange={handleCheckboxChange} />
                        <label htmlFor={type}>{type}</label>
                    </div>
                ))}
            </form>
        </fieldset >
    )
}

export default CardFilter;