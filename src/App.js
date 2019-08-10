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
    // const friends = this.state.friends.filter(friend => friend.id !== id);

    this.duplicateId(id);
    this.setState(prevState => ({ 
      clicked: [id, ...prevState.clicked], 
      // friends, 
      count: this.state.count + 1 }));
      console.log(this.state.clicked);
    };

  duplicateId = id => {

    if (id === this.state.clicked.length) {
      this.setState({
        count: 0,
        clicked: [],
        friends
      })
      alert(`You already picked that friend! TRY AGAIN!`);
      window.location.reload();

    };

  };

  shuffleCards = arr => {
    if (this.state.count <= 12) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * arr.length)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      };
    } else {
      
      this.setState({
        count: 0
      })
    };
    return arr
  };

  componentDidMount() {
    this.shuffleCards(friends);
  }

  componentDidUpdate() {
    // this.duplicateId(friends.id)
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
