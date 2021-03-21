import React, { useEffect } from 'react'
import { MovieItem, MovieItemErrorBoundary } from '../MovieItem'
import { connect } from 'react-redux';
import axios from 'axios';
import { URLS } from '../../../urls/urls.constant';
import { updateMovieListAction } from '../../../store';
import { ModalService } from '../../Modal';

const MovieGrid = ({ movieList, movieFilters, fetchMovieList }) => {
    useEffect(() => fetchMovieList(movieFilters), [movieFilters]);
    if (!movieList || movieList.length === 0) return <div className="empty-grid-message"><h1>No Movie Found</h1></div>
    return (
        <>
            <span className="movie-count"><b>{movieList.length}</b> movies found</span>
            <div className="movie-grid">
                {movieList.map(movieItem => <MovieItemErrorBoundary key={movieItem.id}>
                    <MovieItem movieItem={movieItem} />
                </MovieItemErrorBoundary>)}
            </div>
        </>
    );
}

const fetchMovieList = dispatch => movieFilters => {
    axios.get(URLS.MOVIE_LIST, { params: movieFilters })
        .then(res => res.data)
        .then(data => dispatch(updateMovieListAction(data.data)))
        .catch(() => ModalService.openErrorModal('Something went wrong. Please try again after some time.'));
};

const mapStateToProps = ({ movieList, movieFilters }) => ({ movieList, movieFilters });

const mapDispatchToProps = dispatch => ({ fetchMovieList: fetchMovieList(dispatch) });

const component = connect(mapStateToProps, mapDispatchToProps)(MovieGrid);

export { component as MovieGrid };