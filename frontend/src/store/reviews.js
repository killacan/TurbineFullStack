import csrfFetch from "./csrf";
import {RECEIVE_GAME} from './games'

export const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const getReviews = state => {
    if (!state.reviews) return [];
    return Object.values(state.reviews);
};

export const getReview = reviewId => state => {
    if (!state.reviews) return null;
    return state.reviews[reviewId];
}

export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch("/api/reviews");
    const reviews = await res.json();
    // console.log(reviews)
    dispatch({ type: RECEIVE_REVIEWS, reviews });
}

// export const fetchReview = reviewId => async dispatch => {
//     const res = await csrfFetch(`/api/reviews/${reviewId}`);
//     const review = await res.json();
//     dispatch({ type: RECEIVE_REVIEW, review });
// }

export const createReview = reviewData => async dispatch => {
    const res = await csrfFetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
    });
    const review = await res.json();
    dispatch({ type: RECEIVE_REVIEW, review });
}

export const updateReview = reviewData => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
    });
    const review = await res.json();
    dispatch({ type: RECEIVE_REVIEW, review });
}

export const deleteReview = reviewId => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        dispatch(removeReview(reviewId));
    }
}

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state };

    switch (action.type) {
        case RECEIVE_REVIEWS:
            newState = { ...newState, ...action.reviews };
            return newState;
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        case RECEIVE_GAME:
            newState = {...action.payload.reviews}
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;