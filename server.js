var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var opennav = function() {
    document.getElementById("mysidenav").style.width = "250px";
    document.getElementById("main").style.marginleft = "250px";
}
var closenav = function() {
    document.getElementById("mysidenav").style.width = "0";
    document.getElementById("main").style.marginleft = "0";
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/archive-1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'archive-1.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
