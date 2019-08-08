import React from "react";
import "./style.css";



function FriendCard(props) {
    return (
        // <div className="container">
        <span onClick={() => props.southParkMemory(props.id)} className="memory">
            <button type="button" className="btn">
                <div className="card">
                    <div className="card-wrapper">
                        <div className="img-wrapper">
                            <img src={props.image} className="card-img-top" alt={props.name} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">{props.name}</h5>
                            <p className="card-text text-center"><strong>Alias:</strong> {props.alias}</p>
                        </div>
                    </div>
                </div>
            </button>
        </span>
        // </div>
    );
};

export default FriendCard;