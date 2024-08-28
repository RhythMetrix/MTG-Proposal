import { Link } from "react-router-dom";
import { useState, useEffect, useContext,  } from "react";
import CardsContext from "../context/CardsContext";
import navDark from "../assets/navDark.webp";
import navLight from "../assets/navLight.webp";
import MagicLogo from "../assets/MagicLogo.webp"
import lightModeIcon from "../assets/lightModeIcon.webp";
import darkModeIcon from "../assets/darkModeIcon.webp";



function NavBar({ title }) {
    const {theme, setTheme} = useContext(CardsContext); // using state to toggle between lightmode and darkmode

    useEffect(() => {
        // document.nav.className = theme;
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <nav>
            <div className='nav-icons'>
                <Link to='/'>
                    <h1>MAGIC: DECK BUILDER</h1>
                </Link>
                <div className='nav-container'>
                    <Link to='/deck/'>
                        Your Deck
                    </Link>
                    <input type="image" src={theme === "dark" ? lightModeIcon : darkModeIcon} onClick={toggleTheme}></input>
                    {/* <button onClick={toggleTheme}>
                        <img src={theme === "dark" ? lightModeIcon : darkModeIcon}></img>
                    </button> */}
                </div>
            </div>
            <img src={theme === 'dark' ? navDark : navLight}></img>
        </nav >
    )
}

export default NavBar;