import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { URLS } from '../../../urls/urls.constant';
import { ModalService } from '../../Modal';
import axios from 'axios';

export const MovieDetail = () => {
    const INVALID_POSTER_PATH = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU';
    const { movieID } = useParams();
    const [movieItem, setMovieItem] = useState({});
    const initMovieDetail = useCallback(() => {
        setMovieItem({});
        fetchMovieData(movieID, movieData => setMovieItem(movieData))
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    useEffect(initMovieDetail, [movieID]);

    return (
        <div className="movie-detail-section">
            <img src={movieItem.poster_path ? movieItem.poster_path : INVALID_POSTER_PATH} onError={e => e.target.src = INVALID_POSTER_PATH} />
            <div className="movie-detail">
                <div className="title">
                    <h1>{movieItem.title ? movieItem.title : 'Loading...'}</h1>
                    {movieItem.vote_average ? <h3 className={Number(movieItem.vote_average) < 5 ? 'text-primary' : 'text-green'}>{movieItem.vote_average}</h3> : null}
                </div>
                <span className="sub-title">{movieItem.tagline}</span>
                <div className="movie-stats">
                    <span>{movieItem.release_date && movieItem.release_date.substring(0, 4)}</span>
                    <span>{movieItem.runtime && `${movieItem.runtime} min`}</span>
                </div>
                <p className="movie-content">
                    {movieItem.overview}
                </p>
            </div>
        </div>
    );
}

const fetchMovieData = (movieID, cb) => {
    axios.get(`${URLS.MOVIE_LIST}/${movieID}`)
        .then(res => res.data)
        .then(data => cb(data))
        .catch(() => {
            ModalService.openErrorModal('Something went wrong. Please try again after some time.');
            cb({
                title: 'Something went wrong!',
                tagline: 'Please try again after sometime.'
            });
        });
};
