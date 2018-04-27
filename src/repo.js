import React from 'react';


const Repo = (props) => (
  <div className = 'repo'>
    <a href={props.repo.html_url}>
      <img className='gitImage' src={require('./resources/red-git.png')} alt='git'/>
    </a>
    <h4 className="repoName" >{props.repo.name}</h4>
  </div>
);

export default Repo
