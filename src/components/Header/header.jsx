import React from 'react';
import './header.scss';
import { ModalService } from '../Modal';

export const Header = () => (
    <header>
        <div className="header-content">
            <nav>
                <a href="./" className="logo clickable">
                    <b>netflix</b>roulette
                </a>
                <div className="nav-action">
                    <button className="add-movie-button clickable" onClick={() => {
                        ModalService.openAddMovieModal()
                    }}>
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