import React, { Component } from 'react';
import './App.css';
import AllUsers from '../../components/AllUsers/AllUsers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
         <a href="/">Home</a>
        </header>
      <h1>Hello react!</h1>
      <AllUsers/>
      </div>
    );
  }
}

export default App;
