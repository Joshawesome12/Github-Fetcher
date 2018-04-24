import React, { Component } from 'react';
import axios from 'axios'
import './App.sass';

class App extends Component {


  handleClick = () =>{
    console.log('request inititated');
    axios.get('/repos').then(()=>{
      console.log('in .then')
    }
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={require('../public/github-512.png')} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Github Fetcher</h1>
        </header>
        <div>
         <h2 className='fetch-title'>Enter a Github Username to fetch repos:     </h2><div className='fetch-input'><input placeholder="Github UserName"></input><button onClick={this.handleClick}>Fetch</button></div>
        </div>
      </div>
    );
  }
}

export default App;
