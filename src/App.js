import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    clicked: [],
    friends,
    highScore: 0,
    count: 0
  };

  southParkMemory = id => {
    if (this.state.clicked.includes(id)) {
      alert("Okay, let's try this again!");

      this.setState({
        clicked: [],
        friends,
        count: 0
      });

      console.log(`High Score: ${this.state.highScore}`);
    } else {
      this.setState(prevState => ({
        clicked: [id, ...prevState.clicked],
        count: this.state.count + 1
      }));

      console.log(this.state.clicked);
    }
  };

  highscore = () => {
    if (this.state.count > this.state.highScore) {
      this.setState({ highScore: this.state.count });
    }
  };

  shuffleCards = arr => {
    if (this.state.count <= 12) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * arr.length);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    return arr;
  };

  componentDidMount() {
    this.shuffleCards(friends);
  }

  componentDidUpdate() {
    this.shuffleCards(friends);
    this.highscore();
  }

  render() {
    return (
      <>
        <Navbar
          count={this.state.count}
          highscore={this.state.highScore}
        />

        <Container>
          <Row className="tile-row justify-content-center">
            {this.state.friends.map(friend => (
              <FriendCard
                southParkMemory={this.southParkMemory}
                key={friend.id}
                id={friend.id}
                name={friend.name}
                image={friend.image}
                alias={friend.alias}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
