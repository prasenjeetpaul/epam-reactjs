import React, { Component } from 'react'
import { MovieItemData, MovieItem } from './movie-item';

export class MovieItemErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.error('Something bad happened!! Falling back via Error Boundary');
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            const errorMovieItem = new MovieItemData(
                (new Date()).getTime(),
                'Server Error',
                [],
                '',
                'https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg',
            );
            return <MovieItem movieItem={errorMovieItem} hasError={true} />
        }

        return this.props.children;
    }
}
