import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { ReactCreateElementComponent } from "./components/HelloWorld";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

ReactDOM.render(
    ReactCreateElementComponent,
    document.getElementById("react-element-placeholder")
);
