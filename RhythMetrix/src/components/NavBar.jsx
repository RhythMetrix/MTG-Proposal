import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar({ title }) {
    const [theme, setTheme] = useState('light'); // using state to toggle between lightmode and darkmode

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
                    {title}
                </h1>
            </Link>
            <div className='nav-container'>
                <Link to='/deck/'>
                    Deck
                </Link>
                <button onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
        </nav >
    )
}

export default NavBar;