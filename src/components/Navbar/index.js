import React from "react";
import NavBar from "react-bootstrap/navbar";
import "./style.css";

function Navbar(props) {
    return (
        <NavBar className="nav" bg="light">
            <NavBar.Brand><strong>South Park Rodeo!</strong></NavBar.Brand>
            <span className="ml-auto">
                <strong>Score: <span className="currentScore" id="currentScore">{props.count}</span> | High Score: <span className="highScore" id="highScore"> {props.highscore}</span></strong>
            </span>
        </NavBar>
    )
};

export default Navbar;