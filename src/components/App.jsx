import "../assets/style/style.scss";
import React from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';
import { Modal } from "./Modal";
import { Provider } from "react-redux";
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

const App = ({ Router, location, context, store }) => {
    return (
        <Provider store={store}>
            <Router location={location} context={context}>
                <Header />
                <Main />
                <Footer />
                <Modal />
            </Router>
        </Provider>
    );
}

App.propTypes = {
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
        url: PropTypes.string,
    }),
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    }).isRequired,
};
App.defaultProps = {
    location: null,
    context: null,
};

export default hot(module)(App);
