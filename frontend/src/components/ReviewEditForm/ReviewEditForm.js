import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../../assets/user.png";
import { updateReview } from "../../store/reviews";


function ReviewsEditForm ({body}) {
    const dispatch = useDispatch();
    const {gameId} = useParams();
    
    const gameData = useSelector(state => state.games[gameId]);

    
    const sessionUser = useSelector(state => state.session.user);
    const [newBody, setNewBody] = useState(body);
    
    console.log(newBody);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateReview({newBody, reviewer_id:sessionUser.id, game_id:gameData.id}));
    }

    return (
        <div className="reviews-form">
            <div className="review-install-play-container">
                
            </div>
            {/* <h2 className="review-title-text">Write a review for {gameData.name} </h2> */}

            <img className="user-icon" src={userIcon} />

            <form className="review-form" onSubmit={handleSubmit}>

                <textarea id="review-text-input" value={newBody} onChange={(e) => setNewBody(e.target.value)} />
                <div className="review-form-controls">
                    <button className="review-submit-button" type="submit"> Edit Review</button>
                </div>
            </form>

            
        </div>
    );
}

export default ReviewsEditForm;