import React, { Component } from 'react';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={require('../public/github-512.png')} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to the Github Fetcher</h1>
        </header>
      </div>
    );
  }
}

export default App;
