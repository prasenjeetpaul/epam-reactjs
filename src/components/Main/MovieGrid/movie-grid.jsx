import React, { useContext } from 'react'
import { MovieItem, MovieItemErrorBoundary } from '../MovieItem'
import { store } from '../../store';

export const MovieGrid = () => {
    const { state: { movieList } } = useContext(store);
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
