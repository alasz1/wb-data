
// Require is deprecated -> this should be changed to another method such as node-fetch
const request = require('request');

// Base URL for WB API
const url = 'http://api.worldbank.org/v2/country/';

// This should be refactored to ES6 (e.g. using Promises)
var data = {
    find: function(req, res, next) {
        request(url + req,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                response = JSON.parse(body);
                res.send(response);
            } else {
                console.log(response.statusCode + response.body);
                res.send({data: -1});
            }
        });
 
    }
 };

module.exports = data;





