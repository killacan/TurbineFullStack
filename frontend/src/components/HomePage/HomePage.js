import MiniNavBar from "../MiniNavBar";
import { useState, useEffect } from "react";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, getGames } from "../../store/games";

function HomePage () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGames());
    }, []);

    const games = useSelector(getGames);
    console.log(games);
    
    const [currentFeatured, setCurrentFeatured] = useState(0);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [currentSpecialOffers, setCurrentSpecialOffers] = useState(0);
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
                        <div className="left-special-offers-arrow" onClick={() => setCurrentSpecialOffers((currentSpecialOffers + 1) % 3)}>
                            <img className="arrows" src={leftArrow} />
                        </div>
                    </div>

                    <div className="special-offers-holder">
                        <p>{currentSpecialOffers}</p>
                        <div className="special-page-1">
                            <div className="sp1-1">
                            
                            </div>
                            <div className="sp1-2">

                            </div>
                            <div className="sp1-3">
                            
                            </div>
                            <div className="sp1-4">

                            </div>
                        </div>
                        <div className="special-page-2">
                            <div className="sp2-1">
                            
                            </div>
                            <div className="sp2-2">

                            </div>
                            <div className="sp2-3">
                            
                            </div>
                        </div>
                        <div className="special-page-3">
                            <div className="sp3-1">
                            
                            </div>
                            <div className="sp3-2">

                            </div>
                            <div className="sp3-3">
                            
                            </div>
                            <div className="sp3-4">

                            </div>
                            <div className="sp3-5">
                            
                            </div>
                            <div className="sp3-6">

                            </div>
                        </div>
                    </div>

                    <div className="right-special-offers-arrow" onClick={() => setCurrentSpecialOffers(((currentSpecialOffers - 1) + 3) % 3)}>
                        <img className="arrows" src={rightArrow} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;