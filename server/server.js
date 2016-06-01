var express = require('express');
var app = express();
var api = require('./api/api');
var error = require('./middleware/error');
// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling

app.use(error);
// export the app for testing
module.exports = app;
