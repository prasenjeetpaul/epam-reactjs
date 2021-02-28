import React from 'react';
import './header.scss';

export const Header = () => (
    <header>
        <div className="header-content">
            <nav>
                <span className="logo clickable">
                    <b>netflix</b>roulette
                </span>
                <div className="nav-action">
                    <button className="add-movie-button clickable">
                        + ADD MOVIE
                    </button>
                </div>
            </nav>
            <div>
                <h1>FIND YOUR MOVIE</h1>
                <div>
                    <input type="text" placeholder="What do you want to search?" />
                    <button className="clickable">SEARCH</button>
                </div>
            </div>
        </div>
    </header>
);