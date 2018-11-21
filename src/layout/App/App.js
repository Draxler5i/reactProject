import React, { Component } from 'react';
import './App.css';
import UserDetails from '../../components/UserDetails/UserDetails';
import SearchBar from '../../components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
         <a href="/">Home</a>
        </header>
      <h1>Hello react!</h1>
      <UserDetails/>
      <SearchBar/>
      </div>
    );
  }
}

export default App;
