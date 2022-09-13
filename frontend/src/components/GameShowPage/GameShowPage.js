import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import MiniNavBar from "../MiniNavBar";
import { useEffect, useState } from "react";
import { fetchGame, getGame } from "../../store/games";


const GameShowPage = () => {
    const dispatch = useDispatch();
    const { gameId } = useParams();

    const gameData = useSelector(getGame(gameId));
    
    useEffect(() => {
        dispatch(fetchGame(gameId));
    }, [gameId]);

    const [currentImage, setCurrentImage] = useState(1);
    
    useEffect(() => {

    }, [currentImage]);

    if (!gameData) return null

    return (
        <>
            <div className="game-show-page-background">
            </div>
            <MiniNavBar />
                <div className="game-show-page-container">
                    <div className="game-title-container">
                        <h1 className="game-title">{gameData.name}</h1>
                    </div>
                    <div className="game-show-page-title-content">
                        <div className="game-show-page-media-container">
                            <img src={gameData.photoUrls[currentImage]} />
                        </div>
                        <div className="game-show-page-title-details">
                            <img src={gameData.photoUrls[0]} />
                            <p>{gameData.description}</p>
                        </div>

                        <div className="game-show-page-media-scrolly">
                            {gameData.photoUrls.slice(1).map ((photo, idx) => (
                                <button value={idx + 1} className="mini-scrolly-image-container" onClick={(e) => setCurrentImage(e.target.value)}>
                                    <img className={`mini-scrolly-imgs`} id={`mini-scrolly-imgs${idx}`} src={photo} />
                                </button>
                            ))}
                        </div> 
                    </div>
                    <div className="game-show-page-buttons">
                    
                    </div>

                    <div className="buy-button-container">
                            <div className="buy-button1-container">
                                <NavLink to={`/cart`}> <button className="buy-button">Add to Cart</button></NavLink>
                            </div>

                            <div className="buy-button2-container">
                                <button className="buy-button">Buy Now</button>
                            </div>
                    </div>

                    <div className="relevant-box">
                            
                    </div>
                    
                    <div className="game-show-page-reviews-container">

                    </div>
                </div>
        </>
    )

}

export default GameShowPage;