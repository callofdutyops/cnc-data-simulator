const express = require('express');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const helmet = require('helmet');
const app = express();
const server = require('http').Server(app);

//setup security ===============================================================
require('./app/shared/security-setup')(app, helmet);

// configuration ===============================================================
app.use(logger('dev')); // log every request to the console

// set up our express application ==============================================

// Make the body object available on the request
// limit: 50mb to avoid req size limitation
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

// set handlebars as default templating engine
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

// serve the static content 
app.use(express.static(__dirname + '/public'));

// mount the routes
require('./app/routes.js')(app); // load our routes and pass in our app

// errorhandling
require('./app/shared/errorhandling.js')(app);

// export so bin/www can launch ================================================
module.exports = {app: app, server: server};
