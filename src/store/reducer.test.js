import { rootReducer, initialState } from "./reducer";
import { REDUCER_ACTIONS } from "./action";

describe('Reducer', () => {

    let state;

    beforeEach(() => state = initialState);

    it('should match the initial state of the reducer', () => {
        expect(rootReducer(undefined, {})).toEqual(state);
    });

    it('should update the `selectedMovieItem` on `UPDATE_SELECTED_MOVIE`', () => {
        const payload = {};
        const action = { type: REDUCER_ACTIONS.UPDATE_SELECTED_MOVIE, payload }
        expect(rootReducer(undefined, action)).toEqual({
            ...state,
            selectedMovieItem: payload
        });
    });

    it('should update the `selectedMovieItem` on `UPDATE_MOVIE_LIST`', () => {
        const payload = [{}];
        const action = { type: REDUCER_ACTIONS.UPDATE_MOVIE_LIST, payload }
        expect(rootReducer(undefined, action)).toEqual({
            ...state,
            movieList: payload
        });
    });

    it('should update the `sortBy` on `UPDATE_FILTER_SORT_BY`', () => {
        const payload = 'MOCK_SORT_OPTION';
        const action = { type: REDUCER_ACTIONS.UPDATE_FILTER_SORT_BY, payload }
        expect(rootReducer(undefined, action)).toEqual({
            ...state,
            movieFilters: {
                ...state.movieFilters,
                sortBy: payload
            }
        });
    });

    it('should update the `filter` on `UPDATE_FILTER_GENRE`', () => {
        const payload = 'MOCK_FILTER_OPTION';
        const action = { type: REDUCER_ACTIONS.UPDATE_FILTER_GENRE, payload }
        expect(rootReducer(undefined, action)).toEqual({
            ...state,
            movieFilters: {
                ...state.movieFilters,
                filter: payload
            }
        });
    });

    it('should update the `search` and `searchBy` on `UPDATE_FILTER_TITLE`', () => {
        const payload = 'Mock Title';
        const action = { type: REDUCER_ACTIONS.UPDATE_FILTER_TITLE, payload }
        expect(rootReducer(undefined, action)).toEqual({
            ...state,
            movieFilters: {
                ...state.movieFilters,
                search: payload,
                searchBy: 'title'
            }
        });
    });

    it('should update the `search` and `searchBy` to null if payload is null on `UPDATE_FILTER_TITLE`', () => {
        let payload = null;
        let action = { type: REDUCER_ACTIONS.UPDATE_FILTER_TITLE, payload }
        expect(rootReducer(undefined, action)).toEqual({
            ...state,
            movieFilters: {
                ...state.movieFilters,
                search: null,
                searchBy: null
            }
        });
    });

    it('should retrun the same state on `REFRESH_MOVIE_DATA`', () => {
        expect(rootReducer(undefined, { type: REDUCER_ACTIONS.REFRESH_MOVIE_DATA })).toEqual(state);
    });

    it('should update the `selectedMovieItem` on `UPDATE_MOVIE_ITEM` only if id matches', () => {
        const payload = { id: 10, movie: 'Updated Movie Title' };
        state.selectedMovieItem = { id: 10, movie: 'Movie Title' }
        const action = { type: REDUCER_ACTIONS.UPDATE_MOVIE_ITEM, payload };
        expect(rootReducer(undefined, action)).toEqual({
            ...state,
            selectedMovieItem: payload
        });
    });

    it('should delete the `selectedMovieItem` on `UPDATE_MOVIE_ITEM` only if id matches', () => {
        const payload = 10;
        state.selectedMovieItem = { id: 10, movie: 'Movie Title' }
        const action = { type: REDUCER_ACTIONS.UPDATE_MOVIE_ITEM, payload };
        expect(rootReducer(undefined, action)).toEqual({
            ...state,
            selectedMovieItem: null
        });
    });

});