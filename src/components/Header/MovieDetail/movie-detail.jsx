import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types';
import { MovieItemData } from '../../Main/MovieItem';

export const MovieDetail = ({ movieItem }) => {
    const scrollToTop = useCallback(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }));
    useEffect(scrollToTop, [movieItem]);

    return (
        <div className="movie-detail-section">
            <img src={movieItem.posterURL} />
            <div className="movie-detail">
                <div className="title">
                    <h1>{movieItem.movieTitle}</h1>
                    <h3 className={Number(movieItem.rating) < 5 ? 'text-primary' : 'text-green'}>{movieItem.rating}</h3>
                </div>
                <span className="sub-title">{movieItem.subTitle}</span>
                <div className="movie-stats">
                    <span>{movieItem.releaseDate}</span>
                    <span>{movieItem.runtime} min</span>
                </div>
                <p className="movie-content">
                    {movieItem.movieContent}
                </p>
            </div>
        </div>
    );
}

MovieDetail.propTypes = {
    movieItem: PropTypes.instanceOf(MovieItemData).isRequired,
}