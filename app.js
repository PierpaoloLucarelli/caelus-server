var express = require('express');
var app = express();
var router = require("./router.js");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(router);

var server_port = process.env.PORT || 8080;

app.listen(server_port, function(){

});
