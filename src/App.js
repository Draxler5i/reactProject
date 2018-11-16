import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Wellcome to my first app on React</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <p>
            I am all powerfull!! xD
          </p>
        </div>
      </div>
    );
  }
}

export default App;
