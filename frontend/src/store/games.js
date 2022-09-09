import csrfFetch from "./csrf"

export const RECEIVE_GAMES = 'games/RECEIVE_GAMES'
export const RECEIVE_GAME = 'games/RECEIVE_GAME'
export const REMOVE_GAME = 'games/REMOVE_GAME'

export const getGames = state => {
    if (!state.games) return [];
    return Object.values(state.games);
}

export const getGame = gameId => state => {
    if (!state.games) return null;
    return state.games[gameId];
}

export const fetchGames = () => async dispatch => {
    const res = await csrfFetch('/api/games');
    const games = await res.json();
    dispatch({ type: RECEIVE_GAMES, games });
}

export const fetchGame = gameId => async dispatch => {
    const res = await csrfFetch(`/api/games/${gameId}`);
    const game = await res.json();
    dispatch({ type: RECEIVE_GAME, game });
}

export const createGame = game => async dispatch => {
    const res = await fetch('/api/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(game)
    });
    const newGame = await res.json();
    dispatch({ type: RECEIVE_GAME, game: newGame });
}

export const updateGame = game => async dispatch => {
    const res = await fetch(`/api/games/${game.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(game)
    });
    const updatedGame = await res.json();
    dispatch({ type: RECEIVE_GAME, game: updatedGame });
}

export const deleteGame = gameId => async dispatch => {
    const res = await fetch(`/api/games/${gameId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    const deletedGame = await res.json();
    dispatch({ type: REMOVE_GAME, gameId: deletedGame.id });
}

const gameReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = {...state}; 

    switch (action.type) {
        case RECEIVE_GAMES:
            newState = {...newState, ...action.games};
            return newState;
        case RECEIVE_GAME:
            newState[action.game.id] = action.game;
            return newState;
        case REMOVE_GAME:
            delete newState[action.gameId];
            return newState;
        default:
            return state;

    }
}

export default gameReducer;