import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { MovieActionMenu } from '../MovieActionMenu';
import { MovieItemData } from './movie-item.model';
import { store, REDUCER_ACTIONS } from '../../store';

export const MovieItem = ({ movieItem }) => {
    const [inHover, setHover] = useState(false);
    const { dispatch } = useContext(store);
    return (
        <div className="movie-item clickable" onClick={() => dispatch({ type: REDUCER_ACTIONS.UPDATE_SELECTED_MOVIE, payload: movieItem })}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img src={movieItem.posterURL} />
            <div className="movie-info">
                <div>
                    <h3 className="movie-title">{movieItem.movieTitle}</h3>
                    <span className="movie-genre">{movieItem.movieGenre.join(', ')}</span>
                </div>
                <span className="movie-year">{movieItem.releaseDate}</span>
            </div>
            {inHover && <MovieActionMenu />}
        </div>
    );
}

MovieItem.propTypes = {
    movieItem: PropTypes.instanceOf(MovieItemData).isRequired,
}
