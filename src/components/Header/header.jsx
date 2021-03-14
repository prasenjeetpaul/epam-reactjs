import React, { useContext } from 'react';
import './header.scss';
import { MovieSearch } from './MovieSearch';
import { MovieDetail } from './MovieDetail';
import { HeaderNav } from './HeaderNav';
import { store } from '../store';

export const Header = () => {
    const { state: { selectedMovieItem } } = useContext(store);
    return (
        <header className={selectedMovieItem ? 'dark-bg' : null}>
            <div className="header-content">
                <HeaderNav />
                {selectedMovieItem ? <MovieDetail movieItem={selectedMovieItem} /> : <MovieSearch />}
            </div>
        </header>
    );
}