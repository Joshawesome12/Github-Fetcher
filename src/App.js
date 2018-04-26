import React, { Component } from 'react';
import axios from 'axios'
import './App.sass';

class App extends Component {

  fetchRepos = () =>{
    console.log('request inititated');
    axios.get('https://api.github.com/users/joshawesome12/repos')
    .then((data)=> {
      console.log('in .then',data)
      //Post Request for each repo
      // data.data.forEach(repo =>{
      //   console.log('reponame',repo.name);
      //   axios.post('/repos',{repoName:repo.name}).then((data) =>{
      //     console.log('data in axios.post', data);
      //   })
      // })
      axios.post('/repos',{repoName:'something'}).catch((err) =>{
        console.log('err',err);
      })
    }
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Fetcher</h1>
        </header>
        <div>
         <h2 className='fetch-title'>Enter a Github Username to fetch repos:     </h2><div className='fetch-input'><input placeholder="Github UserName"></input><button onClick={this.fetchRepos}>Fetch</button></div>
        </div>
      </div>
    );
  }
}

export default App;
