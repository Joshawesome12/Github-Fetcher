import React, { Component } from 'react';
import axios from 'axios'
import './App.sass';
import RepoList from './repolist.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      renderRepoList: false
    }
  }

  fetchRepos = () =>{
    console.log('request inititated');
    axios.get('https://api.github.com/users/joshawesome12/repos')
    .then((data)=> {
      // console.log('in .then',data)
      var repos = data.data;
      this.setState({repos:data.data})
      this.setState({renderRepoList: true})
      console.log('state repos', this.state.repos)
      //Post Request for each repo
      repos.forEach(repo =>{
        // console.log('reponame',repo.name);

        axios.post('/repos',{repoName:repo.name}).catch((err) =>{
          console.log('err',err);
        })
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
        <div className="repoList">
          {this.state.renderRepoList ? <RepoList repos={this.state.repos} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
