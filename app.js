var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = require("./router.js");

app.use(router);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function(){
    console.log('App is running on port 8080');
});
