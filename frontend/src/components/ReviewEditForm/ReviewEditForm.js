import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../../assets/user.png";
import { updateReview, deleteReview } from "../../store/reviews";


function ReviewsEditForm ({review, toggleEditForm}) {
    const dispatch = useDispatch();
    const {gameId} = useParams();

    const [editForm, setEditForm] = useState(false);

    const [reviewData, setReviewData] = useState(review);
    // const [toggleEditFormState, setToggleEditFormState] = useState(false);

    const gameData = useSelector(state => state.games[gameId]);

    
    let sessionUser = useSelector(state => state.session.user);
    const [newBody, setNewBody] = useState(reviewData.body);
    
    // console.log(toggleEditForm);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateReview({id: review.id, body: newBody, reviewer_id:sessionUser.id, game_id:gameData.id}));
        toggleEditForm();
    }

    if (!sessionUser) {
        sessionUser = {id: 0};
    }

    useEffect(() => {

    }, [sessionUser]);

    if (!editForm) {
        return (
            <div className="review-button-container">
                {review.reviewerId === sessionUser.id && <button className="review-delete-button" onClick={() => dispatch(deleteReview(review.id))} >Delete</button>}
                {review.reviewerId === sessionUser.id && <button className="review-edit-button" onClick={() => setEditForm(!editForm)}>Edit</button>}
            </div>
        )
    } else {
    
        return (
            <>
            <div className="review-button-container">
                {review.reviewerId === sessionUser.id && <button className="review-delete-button" onClick={() => dispatch(deleteReview(review.id))} >Delete</button>}
                {review.reviewerId === sessionUser.id && <button className="review-edit-button" onClick={() => setEditForm(!editForm)}>Edit</button>}
            </div>
            <div className="reviews-form">

                <div className="review-install-play-container">
                    
                </div>
                {/* <h2 className="review-title-text">Write a review for {gameData.name} </h2> */}

                <img className="user-icon" src={userIcon} />

                <form className="review-form" onSubmit={handleSubmit}>

                    <textarea id="review-text-input" value={newBody} onChange={(e) => setNewBody(e.target.value)} />
                    <div className="review-form-controls">
                        <button className="review-submit-button" type="submit" > Edit Review</button>
                    </div>
                </form>

                
            </div>
        </>
    );
    }
}

export default ReviewsEditForm;