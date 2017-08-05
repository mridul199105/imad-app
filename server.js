var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



function opennav() {
    document.getElementById("mysidenav").style.width = "250px";
    document.getElementById("main").style.marginleft = "250px";
}
function closenav() {
    document.getElementById("mysidenav").style.width = "0";
    document.getElementById("main").style.marginleft = "0";
}

function navappear() {
    var navi = `
        <div id="mysidenav" class="sidenav">
        <a href="javascript:void(0);" class="closebtn" onclick="closenav()">&times;</a>
        <img src="/ui/madi.png" align="center" width="150px" height="150px" />
        <a href="/">Home</a>
        <a href="/archive-1">Page 1</a>
        <a href="/archive-2">Page 2</a>
        <a href="/archive-3">Page 3</a>
        <a href="/archive-4">Page 4</a>
        </div>`;
        return navi;
}

function naviclick() {
    var clickbait = `<a href="javascript:void(0);" onclick="opennav()">Navigation</a>`;
    return clickbait;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/archive-1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'archive-1.html'));
});

app.get('/archive-2', function (req, res) {
  res.send('Something will be here.');
});

app.get('/archive-3', function (req, res) {
    res.send('Something will be here too.');
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
