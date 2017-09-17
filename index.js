var express = require('express');
var mdbData = require('./mongodbData')();
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./models/bookModel');

var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/booksDB');
db = mongoose.connection;
db.on('connected', function () {
    console.log('Connected to mongo database');
})
//Database conection messages
db.on('error', function () {
    console.log('Unable to Connect to mongoDB server');
})
//Setting up the server
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, function () {
    console.log('Server running on port : ' + port)
})

//Using book router
router = require('./Routes/bookroutes')(Book);
app.use('/api', router);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));
