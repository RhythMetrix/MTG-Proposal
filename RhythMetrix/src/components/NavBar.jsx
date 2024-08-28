import { Link } from "react-router-dom";
import { useState, useEffect, useContext,  } from "react";
import CardsContext from "../context/CardsContext";
import navDark from '../assets/navDark.jpg'
import navLight from '../assets/navLight.jpg'

function NavBar({ title }) {
    const {theme, setTheme} = useContext(CardsContext); // using state to toggle between lightmode and darkmode

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <nav>
            <Link to='/'>
                <h1>
                    Magic: The Gathering Deck Builder
                </h1>
            </Link>
            <div className='nav-container'>
                <Link to='/deck/'>
                    Your Deck
                </Link>
                <button onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
            <img src={theme === "light" ? navDark : navLight}></img>
        </nav >
    )
}

export default NavBar;