import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" /*href="#"*/>South Park Click!</a>
            <div className="collapse navbar-collapse" id="navbarText">
                <span className="ml-auto">
                    Score: <span className="currentScore" id="currentScore">{props.count}</span> | High Score: <span className="highScore" id="highScore"> {props.highscore}</span>
                </span>
            </div>
        </nav>
    )
};

export default Navbar;