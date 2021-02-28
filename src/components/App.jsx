import "../assets/style/style.scss";
import React from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';

export default function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}
