import React from "react";
import NavBar from "react-bootstrap/navbar";
import "./style.css";

function Navbar(props) {
    return (
        <NavBar className="nav" bg="light">
            <NavBar.Brand>South Park Click!</NavBar.Brand>
            <span className="ml-auto">
                Score: <span className="currentScore" id="currentScore">{props.count}</span> | High Score: <span className="highScore" id="highScore"> {props.highscore}</span>
            </span>
        </NavBar>
    )
};

export default Navbar;