var http = require('http');
var module = require('./module.js');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    
    // Verwijderen van de favicon in req.url
    if (req.url ==='/favicon.ico') {
      res.writeHead(200, {'Content-Type': 'image/x-icon'});
      res.end();
      return;
    }
   
    
    var q = url.parse(req.url, true).query;
    
    var file = "./" + q.content + ".html";
    if ( file == "./undefined.html") {
        file = "navigate.html";
    }
    //console.log(file);
    fs.readFile(file, function (err, data) {        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);