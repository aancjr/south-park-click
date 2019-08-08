import React, { Component } from 'react';
import FriendCard from "./components/FriendCard"
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import friends from "./friends.json";

import './App.css';



class App extends Component {

  state = {
    clicked: [],
    friends,
    count: 0
  };

  southParkMemory = id => {
    const character = this.state.friends.filter(friend => friend.id !== id);
    console.log(character);
    this.setState({ character, count: this.state.count + 1 });
  }

  shuffleCards = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * arr.length)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  };

  componentDidMount() {

        this.shuffleCards(friends);

}


  render() {
    
    return (
      <Wrapper>
        <Navbar count={this.state.count} />
        <Title>South Park Click!</Title>
        <div className="container col-8">
          {this.state.friends.map(friend =>
            <FriendCard
              // shuffle={this.shuffleCards}
              southParkMemory={this.southParkMemory}
              key={friend.id}
              id={friend.id}
              name={friend.name}
              image={friend.image}
              alias={friend.alias}
            />
          )}
        </div>
      </Wrapper>

    )
  };
}

export default App;
