import React, { Component } from 'react';
import FriendCard from "./components/FriendCard"
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import friends from "./friends.json";

import './App.css';

class App extends Component {

  state = {
    friends
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Title>South Park Click!</Title>
        <div className="container col-8">
          {this.state.friends.map(friend =>
            <FriendCard
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
