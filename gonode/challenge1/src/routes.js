const express = require('express');
const checkQueryParams = require('./middlewares/checkQueryParams');

const routes = express.Router();

const MainController = require('./controllers/MainController');

routes.get('/', MainController.showForm);

routes.post('/check', MainController.checkAge);

routes.get('/major', checkQueryParams, MainController.isMinorOrMajor);

routes.get('/minor', checkQueryParams, MainController.isMinorOrMajor);

module.exports = routes;
