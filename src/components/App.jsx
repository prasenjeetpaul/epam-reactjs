import "../style/style.scss";
import React from 'react';
import { ReactComponent, ReactPureComponent, FunctionalComponent } from "./HelloWorld";
import { WebpackTaskComponent } from './WebpackTask';

export default function App() {
    return (
        <div className="app">
            <h1>EPAM React JS Global Mentoring Program</h1>
            <h2>Week-1 Task</h2>
            <div>
                <div id="react-element-placeholder"></div>
                <ReactComponent />
                <ReactPureComponent />
                <FunctionalComponent />
            </div>
            <h2>Week-2 Task</h2>
            <WebpackTaskComponent />
        </div>
    );
}
