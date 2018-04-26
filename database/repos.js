var db = require('./db.js');

var Repo = {};

Repo.addRepo = function(data){
	console.log('in addRepo',data)
	return db('repos').insert({
		repoName:data
	}).catch(err =>{
		console.log('err',err);
	})
}

module.exports = Repo;
