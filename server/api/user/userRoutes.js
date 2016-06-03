var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./userController');
var createRoutes = require('../../utils/createRoutes');
createRoutes(controller, router);

module.exports = router;
