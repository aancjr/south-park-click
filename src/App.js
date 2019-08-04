import React, { Component } from 'react';
import FriendCard from "./components/FriendCard"
import Wrapper from "./components/Wrapper";
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
        <Title>South Park Click!</Title>
        {this.state.friends.map(friend =>
          <FriendCard
            id={friend.id}
            name={friend.name}
            image={friend.image}
            alias={friend.alias}
          />
        )}
      </Wrapper>

    )
  };
}

export default App;
