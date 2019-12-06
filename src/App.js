import React from 'react';
import './App.css';
import images from "./images.json";
import Card from "./components/Card";
import Header from "./components/Header";
import Message from "./components/Message";
import Wrapper from "./components/Wrapper";

class App extends React.Component {

  state = {
    images: images,
    score: 0,
    highscore: 0,
    message: "Click on an image to earn points, but don't click on any more than once!"
  }

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.images.forEach(image => {
      image.count = 0;
    });
    this.setState({message: `Game Over! You scored ${this.state.score} out of 12... Click an image to begin again!`});
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.images.find((o, i) => {
      if (o.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.setState({message: "Good click! Keep going!"}, function() {
            console.log(this.state.message);
          });
          this.state.images.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.endGame();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore} message={this.state.message}>Clicky Game</Header>
        <Message message={this.state.message} />
        {this.state.images.map(image => (
          <Card
            clickCount={this.clickCount}
            id={image.id}
            key={image.id}
            image={image.url}
          />
        ))}
      </Wrapper>
    );
  };
}

export default App;
