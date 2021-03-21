import React from 'react';
import './header.scss';
import { MovieSearch } from './MovieSearch';
import { MovieDetail } from './MovieDetail';
import { HeaderNav } from './HeaderNav';
import { connect } from 'react-redux';

const Header = ({ selectedMovieItem }) => {
    return (
        <header className={selectedMovieItem ? 'dark-bg' : null}>
            <div className="header-content">
                <HeaderNav />
                {selectedMovieItem ? <MovieDetail movieItem={selectedMovieItem} /> : <MovieSearch />}
            </div>
        </header>
    );
}

const mapStateToProps = ({ selectedMovieItem }) => ({ selectedMovieItem })

const component = connect(mapStateToProps)(Header);

export { component as Header };