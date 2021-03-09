import "../assets/style/style.scss";
import React from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';
import { Modal } from "./Modal";

export default function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
            <Modal />
        </>
    );
}
