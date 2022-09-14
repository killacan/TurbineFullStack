import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../../assets/user.png";
import { createReview } from "../../store/reviews";


function ReviewsForm ({gameData}) {
    const dispatch = useDispatch();

    

    const sessionUser = useSelector(state => state.session.user);
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReview({body, reviewer_id:sessionUser.id, game_id:gameData.id}));
        setBody("");
    }

    return (
        <div className="reviews-form">
            <div className="review-install-play-container">
                
            </div>
            <h2 className="review-title-text">Write a review for {gameData.name} </h2>

            <img className="user-icon" src={userIcon} />

            <form className="review-form" onSubmit={handleSubmit}>

                <textarea id="review-text-input" value={body} onChange={(e) => setBody(e.target.value)} />
                <div className="review-form-controls"> 
                    <button className="review-submit-button" type="submit"> Post Review</button>
                </div>
            </form>

            
        </div>
    );
}

export default ReviewsForm;