import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types';

export const MovieDetail = ({ movieItem }) => {
    const scrollToTop = useCallback(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }));
    useEffect(scrollToTop, [movieItem]);

    return (
        <div className="movie-detail-section">
            <img src={movieItem.poster_path} onError={e => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU'} />
            <div className="movie-detail">
                <div className="title">
                    <h1>{movieItem.title}</h1>
                    {movieItem.vote_average ? <h3 className={Number(movieItem.vote_average) < 5 ? 'text-primary' : 'text-green'}>{movieItem.vote_average}</h3> : null}
                </div>
                <span className="sub-title">{movieItem.tagline}</span>
                <div className="movie-stats">
                    <span>{movieItem.release_date.substring(0, 4)}</span>
                    <span>{movieItem.runtime} min</span>
                </div>
                <p className="movie-content">
                    {movieItem.overview}
                </p>
            </div>
        </div>
    );
}

MovieDetail.propTypes = {
    movieItem: PropTypes.object.isRequired,
}