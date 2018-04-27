var db = require('./db.js');

var Repo = {};

Repo.addRepo = function(data){
	console.log('in addRepo',data)
	return db('repos').insert({
		userName:data.userName,
		repoId:data.repoId,
		repoName:data.repoName,
		repoUrl:data.repoUrl,
		numStars:data.numStars
	}).catch(err =>{
		console.log('------------------------------>err',err);
	})
}

Repo.getTopRepos = function(data){
	return db('repos').select('*').orderBy('numStars','desc').limit('25')
}

module.exports = Repo;
