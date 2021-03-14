import "../assets/style/style.scss";
import React from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';
import { Modal } from "./Modal";
import { StateProvider } from "./store";
import { useConstructor } from "../hooks";

export const App = () => {
    useConstructor(() => document.title = 'NetflixRoulette | EPAM ReactJS Training')
    return (
        <StateProvider>
            <Header />
            <Main />
            <Footer />
            <Modal />
        </StateProvider>
    );
}
