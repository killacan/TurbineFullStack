
import csrfFetch from "./csrf";

export const GET_USER = 'users/GET_USER';
export const UPDATE_USER = 'users/UPDATE_USER'

export const getUser = userId => state => {return state.users[userId]};

export const fetchUser = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`);
    const user = await res.json();
    dispatch({ type: GET_USER, user });
};

export const updateUser = (userData) => async (dispatch) => {
    const res= await csrfFetch(`/api/users/${userData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user: userData})
    });
    const user = await res.json();
    dispatch({ type: UPDATE_USER, user });
};

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case GET_USER:
            newState[action.user.id] = action.user;
            return newState;
        case UPDATE_USER:

        default:
            return state;
    }
};

export default usersReducer;