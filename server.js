var express = require('express');
var app = express();

const port = 3000;

app.get('/', function(req, res) {
    res.send('Sheena Gibbons');
});

app.listen(port, function() {
    console.log(`Listening on port ${port}!`);
});