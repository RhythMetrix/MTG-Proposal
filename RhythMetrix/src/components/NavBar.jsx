function NavBar({ title }) {
    return (
        <nav>
            <h1>
                {title}
            </h1>
            <div className='nav-container'>
                <p>
                    Deck
                </p>
            </div>
        </nav >
    )
}

export default NavBar;