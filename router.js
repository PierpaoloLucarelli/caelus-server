var express = require('express');
var router = express.Router();
var request = require('request');
var weatherMap = require('./models/weatherMap.js');

// will return weather JSON
router.get('/api/open_weather_map', function(req, res) {
    console.log("recieved request");
    var key = process.env.OPEN_WEATHER_KEY;
    request('http://api.openweathermap.org/data/2.5/weather?lat='+ req.query.lat +
            '&lon='+ req.query.lon +'&appid=' + key, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            get_images(res, body, req.query.time);
        }
    });
});

router.get("/hello", function(req,res){
    res.send("hello");
});

var get_images = function(res, weatherInfo, time){
    var weatherString = JSON.parse(weatherInfo);
    var main = weatherString["weather"][0].main;
    var timeFlag;
    if(time > weatherString["sys"]["sunrise"] && time < weatherString["sys"]["sunset"]){
        timeFlag = "Day";
    } else {
        timeFlag = "Night";
    }
    weatherMap.getCollection(timeFlag, main, function(col){
        request("https://api.unsplash.com/photos/random?collections="+col+"&client_id=" + process.env.UNSPLASH_KEY, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.json(JSON.stringify(body));
            }
        });
    })
}
module.exports = router;
