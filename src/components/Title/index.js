import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="container">
            <h1>{props.children}</h1>
        </div>
    );
};

export default Title;