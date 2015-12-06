var express = require('express');
var app = express();

// Authenticator
app.use(express.basicAuth('testUser', 'testPass'));

app.get('/home', function(req, res) {
 res.send('Hello World');
});

app.listen(process.env.PORT || 8080);