import React from 'react';
import './main.scss';
import { MovieGrid } from './MovieGrid';
import { MovieFilterNav } from './MovieFilterNav';

export const Main = () => (
    <main>
        <div className="main-content">
            <MovieFilterNav />
            <MovieGrid />
        </div>
    </main>
);