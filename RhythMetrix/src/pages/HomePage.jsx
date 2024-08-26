import NavBar from "../components/NavBar";
import CardFilter from "../components/SideBar";
import DisplayCards from "../components/CardShowcase";


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