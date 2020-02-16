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
    score: 0
  };

  southParkMemory = id => {
    if (this.state.clicked.includes(id)) {
      alert("Okay, let's try this again!");

      this.setState({
        clicked: [],
        friends,
        score: 0
      });

      console.log(`High Score: ${this.state.highScore}`);
    } else {
      this.setState(prevState => ({
        clicked: [id, ...prevState.clicked],
        score: this.state.score + 1
      }));

      console.log(this.state.clicked);
    }
  };

  highscore = () => {
    if (this.state.score >= 12) {
      this.setState({ 
        highScore: 12,
        clicked: [],
        score: 0});
      alert("YOU WON! Let's go to City Wok!")
    } else if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score });
    }
  };

  shuffleCards = arr => {
    if (this.state.score <= 12) {
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
          score={this.state.score}
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
