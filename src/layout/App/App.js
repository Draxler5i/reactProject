import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WrapperMainView from '../../components/WrapperMainView/WrapperMainView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
         <Link to="/">Home</Link>
        </header>
      <h1>Hello react!</h1>
      <WrapperMainView />
      </div>
    );
  }
}

export default App;
