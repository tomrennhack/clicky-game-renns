import React from 'react';
import './App.css';
import images from "./images.json";
import Game from "./components/Game";


class App extends React.Component {

  state = {
    images: images,
    score: 0,
    pastSelections: []
  }

  handleCardClick = () => {
    // check if inside pastSelections
    // call correct or incorrect
  }

  correct = () => {
    // score++
    // message to user
    // call shuffle
  }

  incorrect = () => {
    // score back to 0
    // message to user
    // call shuffle
  }

  // shuffle can happen in the Game as it doesn't rely on a state
  shuffle = () => {
    // rearrange cards random
    // set to state
  }

  render() {
    console.log(images);
    return ( <div className="App">
      <Game cards={this.state.images}/>
    </div>
    )
  };
}

export default App;
