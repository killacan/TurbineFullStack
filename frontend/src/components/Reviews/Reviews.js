import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../../assets/user.png";
import { deleteReview, getReviews } from "../../store/reviews";
import ReviewsEditForm from "../ReviewEditForm/ReviewEditForm";


function Reviews () {
    const dispatch = useDispatch();
    let sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(getReviews);

    const [editForm, setEditForm] = useState(false);
    
    // console.log(reviews, "reviews");
    
    // let subGameData = gameData;

    const toggleEditForm = () => {
        console.log("toggle edit form", editForm);
        setEditForm(!editForm);
    }

    if (!sessionUser) {
        sessionUser = {id: 0};
    }



    return (
        <div className="reviews">
            <h3 className="customer-reviews-text">Customer Reviews</h3>
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div className="review-container">
                        <div className="review-user-container">
                            <img className="review-userIcon" src={userIcon} />
                            <h5>{review.reviewer}</h5>
                        </div>
                        <p className="review-body-text">{review.body}</p>

                        <ReviewsEditForm review={review} toggleEditForm={toggleEditForm} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;