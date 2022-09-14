import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../../assets/user.png";
import { deleteReview } from "../../store/reviews";
import ReviewsEditForm from "../ReviewEditForm/ReviewEditForm";


function Reviews ({reviews}, {gameData}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [reviewsArr, setReviewsArr] = useState(Object.values(reviews));
    const [editForm, setEditForm] = useState(false);
    
    console.log(Object.values(reviewsArr));
    
    let editShow = false;
    // let subGameData = gameData;

    useEffect(() => {
        setReviewsArr(Object.values(reviews));
    }, [reviews, editShow]);


    return (
        <div className="reviews">
            <h3 className="customer-reviews-text">Customer Reviews</h3>
            <div className="reviews-container">
                {reviewsArr.map((review) => (
                    <div className="review-container">
                        <p className="review-body-text">{review.body}</p>
                        <div className="review-button-container">
                            {review.reviewerId === sessionUser.id && <button className="review-delete-button" onClick={() => dispatch(deleteReview(review.id))} >Delete</button>}
                            {review.reviewerId === sessionUser.id && <button className="review-edit-button" onClick={() => setEditForm(!editForm)}>Edit</button>}
                            {editForm && <ReviewsEditForm body={review.body} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;