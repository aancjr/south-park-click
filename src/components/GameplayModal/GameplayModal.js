import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function GameplayModal(props) {
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header>
        <Modal.Title className="mx-auto">South Park Rodeo!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Welcome to South Park Rodeo!</p>
        <p>
          The object of the game is to click each South Park character{" "}
          <strong>once</strong>. Each time a character is clicked on, the score
          will increase by one and the cards will shuffle. If a character is
          clicked on twice, the game ends, your highscore is tallied and the
          game restarts. The total maximum number of points is 12 (one point per
          character).
        </p>
        <p>Click "Close" to begin the game!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={props.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GameplayModal;
