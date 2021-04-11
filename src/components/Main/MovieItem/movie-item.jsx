import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MovieActionMenu } from '../MovieActionMenu';
import { useHistory } from 'react-router-dom';

export const MovieItem = ({ movieItem }) => {
    const history = useHistory();
    const navigateToMovieDetail = movieID => history.push(`/film/${movieID}`)
    const [inHover, setHover] = useState(false);
    return (
        <div className="movie-item clickable" onClick={() => navigateToMovieDetail(movieItem.id)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img src={movieItem.poster_path} onError={e => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU'} />
            <div className="movie-info">
                <div>
                    <h3 className="movie-title">{movieItem.title}</h3>
                    <span className="movie-genre">{movieItem.genres.join(', ')}</span>
                </div>
                <span className="movie-year">{movieItem.release_date.substring(0, 4)}</span>
            </div>
            {inHover && <MovieActionMenu movieItem={movieItem} />}
        </div>
    );
}

MovieItem.propTypes = {
    movieItem: PropTypes.object.isRequired,
}
