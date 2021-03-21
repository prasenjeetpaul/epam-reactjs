import { createAction } from 'redux-actions';

export const REDUCER_ACTIONS = {
    UPDATE_SELECTED_MOVIE: 'UPDATE_SELECTED_MOVIE',
    UPDATE_MOVIE_LIST: 'UPDATE_MOVIE_LIST',
    UPDATE_FILTER_SORT_BY: 'UPDATE_FILTER_SORT_BY',
    UPDATE_FILTER_GENRE: 'UPDATE_FILTER_GENRE',
    UPDATE_FILTER_TITLE: 'UPDATE_FILTER_TITLE',
    REFRESH_MOVIE_DATA: 'REFRESH_MOVIE_DATA',
    UPDATE_MOVIE_ITEM: 'UPDATE_MOVIE_ITEM',
    DELETE_MOVIE_ITEM: 'DELETE_MOVIE_ITEM',
}

export const updateSelecteMovieAction = createAction(REDUCER_ACTIONS.UPDATE_SELECTED_MOVIE);
export const updateMovieListAction = createAction(REDUCER_ACTIONS.UPDATE_MOVIE_LIST);
export const updateFilterSortByAction = createAction(REDUCER_ACTIONS.UPDATE_FILTER_SORT_BY);
export const updateFilterGenreAction = createAction(REDUCER_ACTIONS.UPDATE_FILTER_GENRE);
export const updateFilterTitleAction = createAction(REDUCER_ACTIONS.UPDATE_FILTER_TITLE);
export const refreshMovieDataAction = createAction(REDUCER_ACTIONS.REFRESH_MOVIE_DATA);
export const updateMovieItemAction = createAction(REDUCER_ACTIONS.UPDATE_MOVIE_ITEM);
export const deleteMovieItemAction = createAction(REDUCER_ACTIONS.DELETE_MOVIE_ITEM);