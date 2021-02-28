import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MovieActionMenu } from '../MovieActionMenu';

export function MovieItem(props) {
    const [inHover, setHover] = useState(false);

    return (
        <div className="movie-item clickable"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img src={props.movieItem.posterURL} />
            <div className="movie-info">
                <div>
                    <h3 className="movie-title">{props.movieItem.movieTitle}</h3>
                    <span className="movie-genre">{props.movieItem.movieGenre.join(', ')}</span>
                </div>
                {!props.hasError && <span className="movie-year">{props.movieItem.releaseDate}</span>}
            </div>
            {inHover && !props.hasError && <MovieActionMenu />}
        </div>
    );
}

MovieItem.propTypes = {
    movieItem: PropTypes.instanceOf(MovieItemData)
}

export function MovieItemData(id = 0, movieTitle = '', movieGenre = [], releaseDate = '', posterURL = '') {
    this.id = id;
    this.movieTitle = movieTitle;
    this.movieGenre = movieGenre;
    this.releaseDate = releaseDate;
    this.posterURL = posterURL;
}
