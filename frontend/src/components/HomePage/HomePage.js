import MiniNavBar from "../MiniNavBar";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

function HomePage () {
    
    const [currentFeatured, setCurrentFeatured] = useState(0);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [specialOffers, setSpecialOffers] = useState([]);

    return (
        <>
            <MiniNavBar />
            <div className="home-page-container">
                <h2> FEATURED & RECOMMENDED</h2>
                <div className="featured-scrolly-box">
                    <div className="left-scrolly-arrow-holder">
                        <div className="left-scrolly-arrow" onClick={() => setCurrentFeatured((currentFeatured + 1) % 5)}>
                            <img className="arrows" id="left-arrow" src={leftArrow} />
                        </div>
                    </div>
                    <div className="featured-scrolly-container">
                        <p>{currentFeatured}</p>
                    </div>
                    <div className="right-scrolly-arrow" onClick={() => setCurrentFeatured(((currentFeatured - 1) + 5) % 5)}>
                        <img className="arrows" id="right-arrow" src={rightArrow} />
                    </div>
                    <div className="scrolly-buttons">
                        
                    </div>
                </div>
                <div className="special-offers-container">
                    <div className="special-offers-text-button-holder">
                        <h2 className="special-offers-text">SPECIAL OFFERS</h2>
                        <button className="special-offers-button">BROWSE MORE</button>
                    </div>
                    <div className="left-special-offers-arrow-holder">
                        <div className="left-special-offers-arrow">
                            <img className="arrows" src={leftArrow} />
                        </div>
                    </div>

                    <div className="special-offers-holder">
                        <div className="special-page-1">

                        </div>
                        <div className="special-page-2">

                        </div>
                        <div className="special-page-3">

                        </div>

                        <div className="special-page-4">

                        </div>
                    </div>

                    <div className="right-special-offers-arrow">
                        <img className="arrows" src={rightArrow} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;