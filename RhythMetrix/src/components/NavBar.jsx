import { Link } from "react-router-dom";
import { useState, useEffect, useContext,  } from "react";
import CardsContext from "../context/CardsContext";
import navDark from "../assets/navDark.webp"



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
            <Link to='/'>
                <img src="../assets/images.jpg"></img>
            </Link>
            <div className='nav-container'>
                <Link to='/deck/'>
                    Your Deck
                </Link>
                <button onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
            {/* <img src={theme === 'dark' ? navDark : navLight}></img> */}
        </nav >
    )
}

export default NavBar;