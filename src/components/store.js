import React, { createContext, useReducer } from 'react';
import { getMovieList } from './Main/MovieItem/movie-item.model';

const initialState = { movieList: getMovieList(), selectedMovieItem: null, movieFilters: null }
const store = createContext(initialState);
const { Provider } = store;

const REDUCER_ACTIONS = {
    UPDATE_SELECTED_MOVIE: 'UPDATE_SELECTED_MOVIE'
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case REDUCER_ACTIONS.UPDATE_SELECTED_MOVIE:
                return { ...state, selectedMovieItem: action.payload };
            default:
                throw new Error('Invalid Action Type');
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, REDUCER_ACTIONS };