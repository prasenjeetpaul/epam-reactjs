import "../assets/style/style.scss";
import React from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';
import { Modal } from "./Modal";
import { useConstructor } from "../hooks";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';

export const App = () => {
    useConstructor(() => document.title = 'EPAM ReactJS Training | Netflix Roulette')
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <Main />
                <Footer />
                <Modal />
            </Provider>
        </BrowserRouter>
    );
}
