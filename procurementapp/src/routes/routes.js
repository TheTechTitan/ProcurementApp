const express = require('express');
const routes = express.Router();

const itemRouter = require('./itemRouter');
const orderRouter = require('./orderRouter');
const users = require('./users');
const company = require('./CompanyRouter');




routes.use('/item/', itemRouter);
routes.use('/order/', orderRouter);
routes.use('/users', users);
routes.use('/company', company);



module.exports = routes;