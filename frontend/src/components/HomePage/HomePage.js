import MiniNavBar from "../MiniNavBar";
import { useState, useEffect } from "react";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchGames, getGames } from "../../store/games";
import { NavLink } from "react-router-dom";

function HomePage () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGames());
    }, []);
    
    const games = useSelector(getGames);
    
    const [currentFeatured, setCurrentFeatured] = useState(0);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [currentSpecialOffers, setCurrentSpecialOffers] = useState(0);
    const [specialOffers, setSpecialOffers] = useState([]);
    const [mainFeatured, setMainFeatured] = useState(0);
    
    

    useEffect(() => {
        setFeaturedProducts(games.slice(0, 5));
        setSpecialOffers(games.slice(5))
    },[games]);

    // useEffect(() => {
    //     // console.log(mainFeatured)
    // }, [mainFeatured]);

    // function hover(element) {
    //     element.addEventListener("mouseenter", e => setMainFeatured(e.target.value));
    //     element.addEventListener("mouseleave", e => setMainFeatured(0));
    // }


    // console.log(specialOffers, specialOffers[1], "featured");
    
    if (!featuredProducts[currentFeatured] || specialOffers.length < 1) return null;
    return (
        <>
            <MiniNavBar />
            <div className="home-page-container">
                <h2> FEATURED & RECOMMENDED</h2>
                <div className="featured-scrolly-box">
                    <div className="left-scrolly-arrow-holder">
                        <div className="left-scrolly-arrow" onClick={() => setCurrentFeatured((((currentFeatured - 1) + 5) % 5))}>
                            <img className="arrows" id="left-arrow" src={leftArrow} />
                        </div>
                    </div>
                    <NavLink id="featured-link" to={`/games/${featuredProducts[currentFeatured].id}`}>
                        <div className="featured-scrolly-container">
                            <h2 className="featured-text">{featuredProducts[currentFeatured].name}</h2>
                            <img className="featured-img" src={featuredProducts[currentFeatured].photoUrls[mainFeatured]} />
                            <div className="mini-featured-scrolly-images">
                                <button value={1} onMouseOver={(e) => setMainFeatured(e.target.value)} onMouseOut={(e) => setMainFeatured(0)} ><img value={1} className="mini-img" id="mini-img-1" src={featuredProducts[currentFeatured].photoUrls[1]} /></button>
                                <button value={2} onMouseOver={(e) => setMainFeatured(e.target.value)} onMouseOut={(e) => setMainFeatured(0)} ><img value={2} className="mini-img" id="mini-img-2" src={featuredProducts[currentFeatured].photoUrls[2]} /></button>
                                <button value={3} onMouseOver={(e) => setMainFeatured(e.target.value)} onMouseOut={(e) => setMainFeatured(0)} ><img value={3} className="mini-img" id="mini-img-3" src={featuredProducts[currentFeatured].photoUrls[3]} /></button>
                                <button value={4} onMouseOver={(e) => setMainFeatured(e.target.value)} onMouseOut={(e) => setMainFeatured(0)} ><img value={4} className="mini-img" id="mini-img-4" src={featuredProducts[currentFeatured].photoUrls[4]} /></button>
                            </div>
                        </div>
                    </NavLink>
                    <div className="right-scrolly-arrow" onClick={() => setCurrentFeatured(((currentFeatured + 1) % 5))}>
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
                        <div className="left-special-offers-arrow" onClick={() => setCurrentSpecialOffers(((currentSpecialOffers - 1) + 3) % 3)}>
                            <img className="arrows" src={leftArrow} />
                        </div>
                    </div>

                    <div className="special-offers-holder">
                    {currentSpecialOffers === 0 && 
                        <div className="special-page-1">
                            <NavLink className="sp1-1" id="special-offers-link" to={`/games/${specialOffers[0].id}`}>
                            <div className="box1-1">
                                <img src={specialOffers[0].photoUrls[0]} />
                            </div>
                            </NavLink>
                            <NavLink className="sp1-2" id="special-offers-link" to={`/games/${specialOffers[1].id}`}>
                            <div className="box1-2">
                                <img src={specialOffers[1].photoUrls[0]} />
                            </div>
                            </NavLink>
                            <NavLink className="sp1-3" id="special-offers-link" to={`/games/${specialOffers[2].id}`}>
                            <div className="box1-3">
                                <img src={specialOffers[2].photoUrls[0]} />
                            </div>
                            </NavLink>
                            <NavLink className="sp1-4" id="special-offers-link" to={`/games/${specialOffers[3].id}`}>
                            <div className="sp1-4">
                                <img src={specialOffers[3].photoUrls[0]} />
                            </div>
                            </NavLink>
                        </div>}
                        {currentSpecialOffers === 1 &&
                        <div className="special-page-2">
                            <div className="sp2-1">
                            
                            </div>
                            <div className="sp2-2">

                            </div>
                            <div className="sp2-3">
                            
                            </div>
                        </div>}
                        {currentSpecialOffers === 2 &&
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
                        </div>}
                    </div>

                    <div className="right-special-offers-arrow" onClick={() => setCurrentSpecialOffers((currentSpecialOffers + 1) % 3)}>
                        <img className="arrows" src={rightArrow} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;