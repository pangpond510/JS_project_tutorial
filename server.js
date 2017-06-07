var express = require('express');
var app = express();

//response html
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
   console.log("response html");
})

//response js
app.get('/script', function (req, res) {
   res.sendFile( __dirname + "/" + "script.js" );
   console.log("response script");
})

//response css
app.get('/style', function (req, res) {
   res.sendFile( __dirname + "/" + "style.css" );
   console.log("response style");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})