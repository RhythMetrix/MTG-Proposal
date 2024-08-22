import { useState, useEffect } from "react";
import { handleFetch } from "../utils";

function CardFilter() {
    const [sets, setSets] = useState([]);
    const [selectedSets, setSelectedSets] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
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
            const limitedTypes = data.slice(0, 10);
            if (data) setTypes(limitedTypes)
            if (error) setError(error)
        }
    })
    console.log(sets)
    return (
        <fieldset>
            <legend>Filter the cards</legend>
            <form>
                <p>
                    Sets
                </p>
                {sets.map((set) => (
                    <div key={set.code}>
                        <input
                            type="checkbox"
                            id={set.code}
                            value={set.code}
                            name={set.name} />
                        <label htmlFor={set.code}>{set.name}</label>
                    </div>
                ))}
                <button type="submit" className="btn btn-success">Search</button>
            </form>
        </fieldset>
    )
}

export default CardFilter;