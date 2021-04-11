import React from 'react';
import './main.scss';
import { MovieGrid } from './MovieGrid';
import { MovieFilterNav } from './MovieFilterNav';
import { PageNotFound } from './PageNotFound';
import { Switch, Route } from 'react-router-dom';

export const Main = () => (
    <main>
        <div className="main-content">
            <Switch>
                <Route path={["/", "/search/:searchTerm", "/film/:movieID"]} exact>
                    <MovieFilterNav />
                    <MovieGrid />
                </Route>
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </main>
);