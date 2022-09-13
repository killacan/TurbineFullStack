import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
    
    if (!gameData) return null

    return (
        <>
            <MiniNavBar />
                <div className="game-show-page-container">
                    {/* <h1>{game.title}</h1> */}
                    <div className="game-show-page-title-content">
                        <div className="game-show-page-media-container">
                            <img src={gameData.photoUrls[1]} />
                        </div>
                        <div className="game-show-page-title-details">
                            <img src={gameData.photoUrls[0]} />
                            <p>{gameData.description}</p>
                        </div>

                        <div className="game-show-page-media-scrolly">
                            {gameData.photoUrls.map (photo => (
                                <img className="mini-scrolly-imgs" src={photo} />
                            ))}
                        </div> 
                    </div>
                    <div className="game-show-page-reviews-container">

                    </div>
                </div>
        </>
    )

}

export default GameShowPage;