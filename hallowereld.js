var http = require('http');
var module = require('./module.js');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    /*
    fs.rename('demoFile.html', 'test.html', function (err) {
        if (err) throw err;
        console.log("filerenamed!");
    });
    //res.end('De tijd is: ' + module.myDateTime());
    var q = url.parse(req.url, true).query;
    //res.write(req.url + "<br>");
    res.write("Mijn voornaam is: " + q.firstname + "<br>");
    res.write("Mijn tussenvoegsel is: " + q.infix + "<br>");
    res.write("Mijn achternaam is: " + q.lastname + "<br>");
    res.write('Node demon is gestart: ' + module.myName());
    
    fs.appendFile('test.html',
                  '<p>Dit is een toegevoegde regel</p>',
                  function (err) {
                    if (err) throw err;
                    console.log("saved!");
                  });
    */

    if (req.url ==='/favicon.ico') {
      res.writeHead(200, {'Content-Type': 'image/x-icon'});
      res.end();
      //console.log('favicon requested');
      return;
    }
   
    var q = url.parse(req.url, true).query;
    
    var file = "./" + q.content + ".html";
    if ( file == "./undefined.html") {
        file = "test.html";
    }
    //console.log(file);
    fs.readFile(file, function (err, data) {        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);