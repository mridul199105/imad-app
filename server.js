var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'mridul199105',
    database: 'mridul199105',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
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
      <div id="logo" class="toplogo">
        <img src="/ui/madi.png" align="center" width="150px" height="150px" />
      </div>
      <div id="top" class="banner">
        WELCOME TO GUI GUI <br>
      </div>
      <div id="mysidenav" class="sidenav">
            <a><span href="/ui/main.js" class="closebtn" onclick="closenav()">&times;</span></a>
            <img src="/ui/madi.png" align="center" width="150px" height="150px" />
            <a href="/">Home</a>
            <a href="/archiveone">Page 1</a>
            <a href="/archivetwo">Page 2</a>
            <a href="/archivethree">Page 3</a>
            <a href="/archivefour">Page 4</a>
            <a href="/counter">Counter</a>
        </div>
      
     
      <div id="main" class="contentmatter" onclick="addMe()">
          <div align="right">${date}</div> 
          <span href="/ui/main.js" onclick="opennav()">Navigation</span>
          <hr>
          <left>
              ${content}
          </left>
          <hr>
      </div>
      <div id="movimg" class="cenimg">
        <img src="/ui/madi.png">
      </div>
     <script src='/ui/main.js'></script>
    </body>
    </html>`;
    return temppg;
}        

var pool = new Pool(config);

var counter = 0;   

app.get('/archive/test-db', function(req,res) {
   pool.query('SELECT * from "article"', function (err, result) {
       if(err) {
           res.status(500).send(err.toString());
       } else {
           res.send(JSON.stringify(result));
       }
   });
});

app.get('/counter', function(req, res) {
    counter++;
    res.send(counter.toString());
});

var arname = [];
app.get('/submitme', function(req, res) {
   var naman = req.query.name;
   arname.push(naman);
   res.send(JSON.stringify(arname));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/main2.js', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main2.js'));
});


app.get('/:archiveme', function (req, res) {
    query.pool('SELECT * FROM "article" WHERE name= $1',[req.params.archiveme], function (err, result) {
       if (err) {
           res.status(500).send(err.toString());
       } else if (result.rows.length === 0) {
           res.status(404).send("Article not Found.");
       } else {
           var articleData = result.rows[0];
           res.send(createtemplate(articleData));
       }
    });
    // var archiveme = req.params.archiveme;
    //res.send(createtemplate(datastuff[archiveme]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
