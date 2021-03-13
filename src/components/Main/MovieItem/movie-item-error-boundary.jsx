import React, { Component } from 'react'

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
            return (
                <div className="movie-item clickable">
                    <img src='https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg' />
                </div>
            );
        }
        return this.props.children;
    }
}
