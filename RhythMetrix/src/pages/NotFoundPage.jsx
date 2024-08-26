import NavBar from "../components/NavBar";

const NotFoundPage = () => { //Our fallback component if there is an URL that doesn't match any of our routes
    return (
        <div>
            <NavBar />
            <h1>
                Page not Found
            </h1>
        </div>
    );
}

export default NotFoundPage;
