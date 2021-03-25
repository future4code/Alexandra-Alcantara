import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  state = {
    fact: {}
  }

  getFact = () => {
    axios
      .get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat,dog,horse&amount=1")
      .then((res) => {
        console.log(res.data)
        this.setState({ fact: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  render() {
  const { type, text } = this.state.fact;
    return (
      <div className="App">
        <h1>Random Facts About Cats and Dogs</h1>
          <button onClick={this.getFact}>Click!</button>
          <p>Animal: {type}</p>
          <p>Fact: {text}</p>
      </div>
    );
  }
}
