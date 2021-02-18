import React from "react";
import "../style/webpack-task.scss";

export const WebpackTaskComponent = () => {
    return (
        <div>
            <h3 style={{ color: 'green' }}>Successfully Configured React-Webpack Project!</h3>
            <ul>
                <li><span>use <code>npm start</code> to start the developemnt server configured using <code>webpack-dev-server</code> </span></li>
                <li><span>use <code>npm run build</code> to build the application for production </span></li>
                <li><span>use <code>npm test</code> to run the test cases configured using <code>jest</code> </span></li>
                <li><span>use <code>npm run test:coverage</code> to run the test cases configured using <code>jest</code></span></li>
            </ul>
        </div>
    )
}