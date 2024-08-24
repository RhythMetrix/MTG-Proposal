import { useState, useEffect, useContext } from "react";
import { handleFetch } from "../utils";
import CardsContext from "../context/CardsContext";

function CardFilter() {
    const [sets, setSets] = useState([]);
    const { selectedSet, setSelectedSet, selectedTypes, setSelectedTypes } = useContext(CardsContext);
    const [types, setTypes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const initialFetch = async () => {
            const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/sets');
            const limitedSets = data.sets.slice(0, 10);
            if (data) setSets(limitedSets)
            if (error) setError(error)
        }
        initialFetch()
    }, [])
    useEffect(() => {
        const initialFetch = async () => {
            const [data, error] = await handleFetch('https://api.magicthegathering.io/v1/types');
            const limitedTypes = data.types.slice(0, 10);
            // console.log(data)
            if (data) setTypes(limitedTypes)
            if (error) setError(error)
        }
        initialFetch()
    }, [])
    // console.log(sets)
    // console.log(types)
    const handleSetChange = (event) => {
        setSelectedSet(event.target.value);
        console.log(`set: ${selectedSet}`)
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedTypes([...selectedTypes, value]);
        } else {
            setSelectedTypes(selectedTypes.filter(type => type !== value));
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Types:', selectedTypes);
    }

    return (
        <fieldset>
            <legend>Filter the cards</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    Sets
                </p>
                <label htmlFor="Sets">Choose a set:</label>
                <select name="Sets" id="Sets" value={selectedSet} onChange={handleSetChange}>
                    {sets.map((set) => (
                        <option value={set.name}>{set.name}</option>
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
                {/* <button type="submit" className="btn btn-success">Filter</button> */}
            </form>
        </fieldset >
    )
}

export default CardFilter;