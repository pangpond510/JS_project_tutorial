var express = require('express');
var app = express();

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
   console.log("response html");
})

app.get('/script', function (req, res) {
   res.sendFile( __dirname + "/" + "script.js" );
   console.log("response script");
})

app.get('/styles', function (req, res) {
   res.sendFile( __dirname + "/" + "styles.css" );
   console.log("response style");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})