const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () =>{
	console.log('listening on port 8080')
});

app.use(bodyParser.json());

//App Routes
var Repo = require('../database/repos.js')

app.get('/repos', function(req,res){
	console.log('in index.js')
	res.end();
})

app.post('/repos',function(req,res){
  // call Repos model function
  var userName = req.body.userName;
  console.log('------------------>in post repos', userName);
  var repoName = req.body.repoName;
  var repoId = req.body.repoId;
  var repoUrl = req.body.repoUrl;
  var numStars = req.body.numStars;
  Repo.addRepo({userName,repoId,repoName,repoUrl,numStars})
  res.end();
})
