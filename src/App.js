import React, { Component } from 'react';
import axios from 'axios'
import './App.sass';
import RepoList from './repolist.js';
import TopRepoList from './topRepoList.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      topRepos:[],
      renderRepoList: false,
      renderTopRepoList: false,
      value:'',
      loading:false,
      failed:false,
      currentUser:null
    }
  }

  componentDidMount() {
    this.getTopRepos();
  }

  getTopRepos = () => {
    axios.get('/topRepos').then((data) =>{
      console.log('data in getTopRepos', data)
      this.setState({topRepos:data.data,renderTopRepoList:true})
    })
  }


  handleChange(event) {
    this.setState({value:event.target.value});
  }

  fetchRepos = (event) =>{
    // console.log('request inititated');
    this.setState({loading:true, repos:[],failed:false}, );
    axios.get(`https://api.github.com/users/${this.state.value}/repos`)
    .then((data)=> {
      this.setState({value:''});
      this.setState({loading:false});
      console.log('in .then',data)
      var repos = data.data;
      this.setState({repos:data.data})
      this.setState({renderRepoList: true})
      console.log('state repos', this.state.repos)
      //Post Request for each repo
      repos.forEach(repo =>{
        // console.log('userName',repo.owner.login);
        axios.post('/repos',{'userName':repo.owner.login,'repoId':repo.id,repoName:repo.name,repoUrl:repo.url,'numStars':repo.stargazers_count})
        .catch((err) =>{
          console.log('err',err);
        })
      })
      this.setState({currentUser:`${data.data[0].owner.login}`})
      this.getTopRepos();
    }
    )
    .catch((err) =>{
      console.log('err',err);
      this.setState({loading:false,currentUser:null})
      this.setState({failed:true})
    })
    event.preventDefault();
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Fetcher</h1>
        </header>

        <div className="lists">

        <div className="topRepos">
          <h1>Top Starred Repositories</h1>
            <div className="topRepoList">
              {this.state.renderTopRepoList ? <TopRepoList topRepos={this.state.topRepos} /> : null}
            </div>
          </div>

        <div className="fetcher">

         <h2 className='fetch-title'>Enter a Github Username to fetch repos     </h2>
         <form onSubmit={this.fetchRepos} className="fetchReposForm">
          <label>
            Github Username:
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
          </label>
          <input type="submit" value="Fetch" onSubmit={this.fetchRepos}/>
        </form>
        {this.state.loading ? <h2>Loading...</h2> : null}
        {this.state.failed ? <h4 className="failed">Failed! Enter a valid Github Username</h4> : null}
        {this.state.currentUser !== null ? <h3>Username: {this.state.currentUser}</h3> : null }
        <div className="repoList">
          {this.state.renderRepoList ? <RepoList repos={this.state.repos} /> : null}
        </div>

      </div>

    </div>
      </div>
    );
  }
}

export default App;
