import MiniNavBar from "../MiniNavBar";

function HomePage () {
    return (
        <>
            <MiniNavBar />
            <div className="home-page-container">
                <div className="top-bar">
                    <h2> FEATURED & RECOMMENDED</h2>
                </div>
                <div className="titleImage">

                </div>
                <div className="scrolly-recommended">
                </div>
            </div>
        </>
    );
}

export default HomePage;