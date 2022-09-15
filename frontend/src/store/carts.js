import csrfFetch from "./csrf";

export const RECEIVE_CART_ITEMS = "cart/RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = 'cart/RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM';

export const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

export const receiveCartItem = cartItems => ({
    type: RECEIVE_CART_ITEM,
    cartItems
});

export const removeCartItem = cartItemId => ({
    type: REMOVE_CART_ITEM,
    cartItemId
});

export const getCartItems = state => {
    if (!state.cart) return [];
    return Object.values(state.cart);
}

export const getCartItem = cartItemId => state => {
    if (!state.cart) return null;
    return state.cart[cartItemId];
}

export const fetchCartItems = () => async dispatch => {
    const res = await csrfFetch("/api/carts");
    const cartItems = await res.json();
    dispatch(receiveCartItems(cartItems));
}

export const fetchCartItem = cartItemId => async dispatch => {
    const res = await csrfFetch(`/api/carts/${cartItemId}`);
    const cartItem = await res.json();
    dispatch(receiveCartItem(cartItem));
}

export const createCartItem = cartItemData => async dispatch => {
    const res = await csrfFetch("/api/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItemData),
    });
    const cartItems = await res.json();
    dispatch(receiveCartItem(cartItems));
}

export const destroyCartItem = cartItemId => async dispatch => {
    const res = await csrfFetch(`/api/carts/${cartItemId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        dispatch(removeCartItem(cartItemId));
    }
}

const cartItemReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state };

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return {...newState, ...action.cartItems};
        case RECEIVE_CART_ITEM:
            return {...newState, ...action.cartItems};
        case REMOVE_CART_ITEM:
            delete newState[action.cartItemId];
            return newState;
        default:
            return state;
    }
}

export default cartItemReducer;

