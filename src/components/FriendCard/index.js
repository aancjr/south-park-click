import React from "react";
import Button from "react-bootstrap/button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./style.css";

function FriendCard(props) {
  return (
    <Card>
      <Button
        className="btn"
        variant="outline-*"
        onClick={() => props.southParkMemory(props.id)}
      >
        <Image
          className="imgsize"
          varient="top"
          src={props.image}
          alt={props.name}
        />
        <Card.Body className="cardbody">
          <Card.Text className="title text-center">{props.name}</Card.Text>
          <Card.Text className="cardtext text-center">
            <strong>Alias:</strong> {props.alias}
          </Card.Text>
        </Card.Body>
      </Button>
    </Card>
  );
}

export default FriendCard;
