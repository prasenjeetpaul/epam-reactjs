import React from "react";

export const ReactCreateElementComponent = React.createElement(
    "div",
    { className: "component-block" },
    [
        React.createElement("h3", { key: "h3" }, "Hello World!"),
        React.createElement("span", { key: "span" }, "React.CreateElement")
    ]
);

export class ReactComponent extends React.Component {
    render() {
        return (
            <div className="component-block">
                <h3>Hello World!</h3>
                <span>React.Component</span>
            </div>
        );
    }
}

export class ReactPureComponent extends React.PureComponent {
    render() {
        return (
            <div className="component-block">
                <h3>Hello World!</h3>
                <span>React.PureComponent</span>
            </div>
        );
    }
}

export const FunctionalComponent = () => (
    <div className="component-block">
        <h3>Hello World!</h3>
        <span>Functional Component</span>
    </div>
);
