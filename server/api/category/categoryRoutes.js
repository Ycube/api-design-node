var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./categoryController');
var createRoutes = require('../../utils/createRoutes');
createRoutes(controller, router);

module.exports = router;
