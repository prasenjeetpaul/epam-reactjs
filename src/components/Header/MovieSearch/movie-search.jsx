import React from 'react';

export const MovieSearch = () => (
    <div className="movie-search-section">
        <h1>FIND YOUR MOVIE</h1>
        <div>
            <input type="text" placeholder="What do you want to search?" />
            <button className="clickable">SEARCH</button>
        </div>
    </div>
);