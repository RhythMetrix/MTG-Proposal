import NavBar from "./NavBar";
import CardFilter from "./SideBar";
import DisplayCards from "./CardShowcase";


function Home() {
    return (
        <>
            <NavBar title='Magic of the Gathering' />
            <CardFilter />
            <DisplayCards />
        </>
    )
}

export default Home;