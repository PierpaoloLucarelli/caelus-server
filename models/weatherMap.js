var weatherMap = {
    Day: {
            Clear:          "394467",
            Atmosphere:     "411049",
            Fog:            "411049",
            Snow:           "411052",
            Clouds:         "411046",
            Rain:           "428145",
            Drizzle:        "428145",
            Thunderstorm:   "428156",
        },
    Night: {
            Clear:          "411055",
            Atmosphere:     "428162",
            Fog:            "428162",
            Snow:           "428149",
            Clouds:         "428144",
            Rain:           "428147",
            Drizzle:        "428147",
            Thunderstorm:   "428136",
        }
};

exports.getCollection = function(time, key, cb){
    var collection;
    collection = weatherMap[time][key];
    cb(collection);
}

module.exports.weatherMap = weatherMap;
