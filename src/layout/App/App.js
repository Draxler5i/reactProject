import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../components/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
         <Link to="/">Home</Link>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
