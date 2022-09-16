
export const GET_USER = 'users/GET_USER';

export const getUser = userId => state => {return state.users[userId]};

export const fetchUser = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`);
    const user = await res.json();
    dispatch({ type: GET_USER, user });
};

export const updateUser = (userData) => async (dispatch) => {
    const res= await fetch(`/api/users/${userData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    const user = await res.json();
    dispatch({ type: GET_USER, user });
};

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case GET_USER:
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
};

export default usersReducer;