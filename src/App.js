import React, { Component } from 'react';
import axios from 'axios'
import './App.sass';
import RepoList from './repolist.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      renderRepoList: false,
      value:''
    }
  }


  handleChange(event) {
    this.setState({value:event.target.value});
  }

  fetchRepos = (event) =>{
    console.log('request inititated');
    axios.get(`https://api.github.com/users/${this.state.value}/repos`)
    .then((data)=> {
      this.setState({value:''})
      // console.log('in .then',data)
      var repos = data.data;
      this.setState({repos:data.data})
      this.setState({renderRepoList: true})
      console.log('state repos', this.state.repos)
      //Post Request for each repo
      repos.forEach(repo =>{
        // console.log('userName',repo.owner.login);
        axios.post('/repos',{'userName':repo.owner.login,'repoId':repo.id,repoName:repo.name,repoUrl:repo.url,'numStars':repo.stargazers_count}).catch((err) =>{
          console.log('err',err);
        })
      })
    }
    )
    event.preventDefault();
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Fetcher</h1>
        </header>
        <div>
         <h2 className='fetch-title'>Enter a Github Username to fetch repos     </h2>
         {/* <div className='fetch-input'><input placeholder="Github UserName"></input><button onClick={this.fetchRepos}>Fetch</button></div> */}
         <form onSubmit={this.fetchRepos}>
          <label>
            Github Username:
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
          </label>
          <input type="submit" value="Fetch" onSubmit={this.fetchRepos}/>
        </form>
        </div>
        <div className="repoList">
          {this.state.renderRepoList ? <RepoList repos={this.state.repos} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
