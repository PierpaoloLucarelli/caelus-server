var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = require("./router.js");

app.use(router);

var server_port = process.env.PORT || 8080;

app.listen(server_port, function(){

});
