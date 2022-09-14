import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Reviews ({reviews}) {
    const dispatch = useDispatch();
    const { gameId } = useParams();

    const [reviewsArr, setReviewsArr] = useState(Object.values(reviews));
    
    console.log(Object.values(reviewsArr));

    useEffect(() => {

    }, [reviewsArr]);

    return (
        <div className="reviews">
            <h3 className="customer-reviews-text">Customer Reviews</h3>
            <div className="reviews-container">
                {reviewsArr.map((review) => (
                    <div className="review-container">
                        <p>{review.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;