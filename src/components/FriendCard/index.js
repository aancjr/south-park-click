import React from "react";
import "./style.css";



function FriendCard(props) {
    // function shuffleCards(arr) {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * arr.length)
    //       const temp = arr[i]
    //       arr[i] = arr[j]
    //       arr[j] = temp
    //     }
    //     return arr
    //   };
    // const shuffle = shuffleCards(props);

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