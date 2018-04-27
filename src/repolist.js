import React from 'react';
import Repo from './repo.js';


const RepoList = (props) => (
  <div>
    {props.repos.map((repo,index) => <Repo repo={repo} key={index}/>)}
  </div>
)

export default RepoList
