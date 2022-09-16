import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import MiniNavBar from "../MiniNavBar";
import { useEffect, useState } from "react";
import { fetchGame, getGame } from "../../store/games";
import Reviews from "../Reviews";
import ReviewsForm from "../ReviewsForm";
import { getReviews } from "../../store/reviews";
import { createCartItem, getCartItems } from "../../store/carts";
import { fetchCartItems } from "../../store/carts";

const GameShowPage = () => {
    const dispatch = useDispatch();
    const { gameId } = useParams();

    const gameData = useSelector(getGame(gameId));
    const cartData = useSelector(state => state.carts);
    const reviews = useSelector(getReviews);
    
    let sessionUser = useSelector(state => state.session.user);
    // console.log(sessionUser);
    
    useEffect(() => {
        dispatch(fetchGame(gameId));
    }, [gameId]);

    const [currentImage, setCurrentImage] = useState(1);
    
    useEffect(() => {

    }, [currentImage, reviews, sessionUser]);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, []);

    const handleAddCart = () => {
        console.log(!(Object.values(cartData).some(cart => cart.gameId === gameData.id)), "cartData");
        if (!sessionUser) {sessionUser = {id: 0};}
        if (!(Object.values(cartData).some(cart => cart.gameId === gameData.id))) dispatch(createCartItem({game_id:gameId, user_id:sessionUser.id}));
    }

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

                        {/* <div className="game-show-page-media-scrolly">
                            {gameData.photoUrls.slice(1).map ((photo, idx) => (
                                <button value={idx + 1} className="mini-scrolly-image-container" onClick={(e) => setCurrentImage(e.target.value)}>
                                    <img className={`mini-scrolly-imgs`} id={`mini-scrolly-imgs${idx}`} src={photo} />
                                </button>
                            ))}
                        </div>  */}
                    </div>
                    <div className="game-show-page-buttons">
                    
                    </div>

                    {sessionUser && (
                    <div className="reviews-form-container">
                        <ReviewsForm gameData={gameData}/>
                    </div>)}

                    <div className="buy-button-container">
                            <div className="buy-button1-container">
                                <NavLink to={`/cart`}> <button className="buy-button" onClick={(e) => handleAddCart(e)}>Add to Cart</button></NavLink>
                            </div>

                            <div className="buy-button2-container">
                                <button className="buy-button">Buy Now</button>
                            </div>
                    </div>

                    <div className="relevant-box">
                            
                    </div>
                    
                    <div className="game-show-page-reviews-container">
                        <Reviews reviews={reviews} gameData={gameData} />
                    </div>
                </div>
        </>
    )

}

export default GameShowPage;