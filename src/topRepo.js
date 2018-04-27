import React from 'react';


const TopRepo = (props) => (
  <div className = 'topRepo'>
    <a href={props.topRepo.html_url}>
      <img className='gitImage' src={require('./resources/red-git.png')} alt='git'/>
    </a>
    <h4 className="repoName" >{props.topRepo.repoName}</h4>
    <h4 className="numStars">{props.topRepo.numStars}</h4>
  </div>
);

export default TopRepo
