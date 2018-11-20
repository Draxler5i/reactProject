import React, { Component } from 'react';
import './App.css';
import Body from '../../components/Body/Body';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
         <a href="/">Home</a>
        </header>
      <h1>Hello react!</h1>
      <Body/>
      </div>
    );
  }
}

export default App;
