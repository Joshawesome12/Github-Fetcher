import React from 'react';
import TopRepo from './topRepo.js';


const TopRepoList = (props) => (
  <div>
    {props.topRepos.map((topRepo,index) => <TopRepo topRepo={topRepo} key={index}/>)}
  </div>
)

export default TopRepoList
