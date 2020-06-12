'use strict';

const controller = require('./controller');

// Defining the routes for retrieving the GDP and populations for Finland, Sweden and Norway

module.exports = function (app) {
    app.route('/gdp')
        .get(controller.gdp);
    app.route('/population')
        .get(controller.population);
    app.route('/gdpchange')
        .get(controller.gdpchange);

    // Add route for average yearly population

};