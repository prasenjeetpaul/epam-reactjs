import React from 'react';
import './header.scss';
import { MovieSearch } from './MovieSearch';
import { MovieDetail } from './MovieDetail';
import { HeaderNav } from './HeaderNav';
import { Switch, Route } from 'react-router-dom';

export const Header = () => {
    return (
        <Switch>
            <Route path={["/", "/search/:searchTerm"]} exact>
                <header>
                    <div className="header-content">
                        <HeaderNav />
                        <MovieSearch />
                    </div>
                </header>
            </Route>
            <Route path="/film/:movieID" exact>
                <header className="dark-bg">
                    <div className="header-content">
                        <HeaderNav />
                        <MovieDetail />
                    </div>
                </header>
            </Route>
            <Route>
                <header className="bg-none">
                    <div className="header-content">
                        <HeaderNav />
                    </div>
                </header>
            </Route>
        </Switch>
    );
}
