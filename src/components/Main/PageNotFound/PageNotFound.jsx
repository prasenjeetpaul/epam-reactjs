import React from 'react';
import PageNotFoundImage from '../../../assets/img/404.png';
import { useHistory } from 'react-router-dom';

export const PageNotFound = () => {
    const history = useHistory();
    const navigateToHome = () => history.push('/');
    return (
        <div className="page-not-found">
            <h1>Page Not Found</h1>
            <img src={PageNotFoundImage} />
            <button className="clickable secondary" onClick={navigateToHome}>GO BACK TO HOME</button>
        </div>
    );
}