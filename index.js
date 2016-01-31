var express = require('express');
var bodyParser = require('body-parser');
var db = require('./config/db');
var mongoose = require('mongoose');

mongoose.connect(db.url);

var app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '../client'));


app.use('/api/user', require('./routes/user').userRouter);
app.use('/api/votes', require('./routes/votes').voteRouter);
app.use('/api/pole', require('./routes/pole').poleRouter);

app.use('/', express.static(__dirname + '/'));

var port = process.env.port||3000;
app.listen(port,function(){
    console.log('Gulp running on port 3000');
})