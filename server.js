var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var datastuff = {
    archiveone: {
        title: 'GUI Page 1',
        date: '05.08.2017',
        content: `
            <h2>This matter will be first article.</h2>
            <ol>
                <li> Contains first header</li>
                <li> Contains Second Header</li>
            </ol>`
    },
    archivetwo: {
        title: 'GUI Page 2',
        date: '10.08.2017',
        content: `
            <h2>This matter will be second article.</h2>
            <ol>
                <li> Contains something something</li>
                <li> Contains no Header</li>
            </ol>`
        
    },
    archivethree: {
        title: 'GUI Page 3',
        date: '15.08.2017',
        content: `
            <h2>This matter will be third article.</h2>
            <ol>
                <li> No more ideas</li>
                <li> Forget it</li>
            </ol>`
    }
};



function createtemplate(data) {
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var temppg = `
    <html>
    <head>
      <title> ${title} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <script>
        function opennav() {
            document.getElementById("mysidenav").style.width = "250px";
            document.getElementById("main").style.marginleft = "250px";
        }
        function closenav() {
            document.getElementById("mysidenav").style.width = "0";
            document.getElementById("main").style.marginleft = "0";
        }
    
      </script>
      <div id="logo" class="toplogo">
        <img src="/ui/madi.png" align="center" width="150px" height="150px" />
      </div>
      <div id="top" class="banner">
        WELCOME TO GUI GUI <br>
      </div>
      <div id="mysidenav" class="sidenav">
            <a href="javascript:void(0);" class="closebtn" onclick="closenav()">&times;</a>
            <img src="/ui/madi.png" align="center" width="150px" height="150px" />
            <a href="/">Home</a>
            <a href="/archiveone">Page 1</a>
            <a href="/archivetwo">Page 2</a>
            <a href="/archivethree">Page 3</a>
            <a href="/archivefour">Page 4</a>
        </div>
      
     
      <div id="main" class="contentmatter">
          <div align="right">${date}</div> 
          <a href="javascript:void(0);" onclick="opennav()">Navigation</a>
          <hr>
          <left>
              ${content}
          </left>
          <hr>
      </div>
     
    </body>
    </html>`;
    return temppg;
}        


    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/archiveone', function (req, res) {
  res.send(createtemplate(datastuff.archiveone));
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
