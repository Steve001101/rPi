var express = require('express');
var app = express();


// Synchronous
var auth = express.basicAuth('testUser', 'testPass');

// Synchronous Function
var auth = express.basicAuth(function(user, pass) {
 return user === 'testUser' && pass === 'testPass';
});

// Asynchronous
var auth = express.basicAuth(function(user, pass, callback) {
 var result = (user === 'testUser' && pass === 'testPass');
 callback(null /* error */, result);
});

app.get('/home', auth, function(req, res) {
 res.send('Hello World');
});

app.get('/noAuth', function(req, res) {
 res.send('Hello World - No Authentication');
});