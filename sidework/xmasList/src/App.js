import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Christmas Wish List</h2>
        </div>
        <p className="App-intro">
          Our place to add a wish list
        </p>
      </div>
    );
  }
}

export default App;
