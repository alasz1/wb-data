'use strict';

var data = require('../service/countrydata');

var controllers = {

    gdp: function (req, res) {
        data.find('fin;swe;nor/indicator/NY.GDP.MKTP.CD?mrnev=1&format=json', res, function (err, ctrdata) {
            if (err)
                res.send(err);
            res.json(ctrdata);
        });
    },
    population: function (req, res) {
        data.find('fin;swe;nor/indicator/SP.POP.TOTL?mrnev=1&format=json', res, function (err, ctrdata) {
            if (err)
                res.send(err);
            res.json(ctrdata);
        });
    },
    gdpchange: function (req, res) {
        data.find('fin/indicator/NY.GDP.MKTP.CD?date=1970:2018&format=json', res, function (err, ctrdata) {
            if (err)
                res.send(err);

            // Here we should get the GDP difference between the two dates (1970-2018). This could be done e.g. by converting the JSON
            // object into an array and then get the difference of the first and last value using Math.abs.  

           res.json(ctrdata);
        });

        
    },
    
};

module.exports = controllers;