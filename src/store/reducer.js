import { REDUCER_ACTIONS } from "./action";

export const initialState = {
    movieList: [],
    selectedMovieItem: null,
    movieFilters: {
        sortBy: 'release_date',
        sortOrder: 'desc',
        search: null,
        searchBy: null,
        filter: null,
        offset: 0,
        limit: 9
    }
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case REDUCER_ACTIONS.UPDATE_SELECTED_MOVIE: return {
            ...state,
            selectedMovieItem: action.payload
        }

        case REDUCER_ACTIONS.UPDATE_MOVIE_LIST: return {
            ...state,
            movieList: [...action.payload]
        }

        case REDUCER_ACTIONS.UPDATE_FILTER_SORT_BY: return {
            ...state,
            movieFilters: {
                ...state.movieFilters,
                sortBy: action.payload
            }
        }

        case REDUCER_ACTIONS.UPDATE_FILTER_GENRE: return {
            ...state,
            movieFilters: {
                ...state.movieFilters,
                filter: action.payload,
            }
        }

        case REDUCER_ACTIONS.UPDATE_FILTER_TITLE: return {
            ...state,
            movieFilters: {
                ...state.movieFilters,
                search: action.payload ? action.payload : null,
                searchBy: action.payload ? 'title' : null
            }
        }

        case REDUCER_ACTIONS.REFRESH_MOVIE_DATA: return {
            ...state,
            movieFilters: { ...state.movieFilters }
        }

        case REDUCER_ACTIONS.UPDATE_MOVIE_ITEM: {
            if (state.selectedMovieItem && state.selectedMovieItem.id === action.payload.id) {
                return {
                    ...state,
                    selectedMovieItem: action.payload
                }
            }
        }

        case REDUCER_ACTIONS.DELETE_MOVIE_ITEM: {
            if (state.selectedMovieItem && state.selectedMovieItem.id === action.payload) {
                return {
                    ...state,
                    selectedMovieItem: null
                }
            }
        }
    }
    return state;
}