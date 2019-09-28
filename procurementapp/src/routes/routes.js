const express = require('express');
const routes = express.Router();

const itemRouter = require('./itemRouter');
const orderRouter = require('./orderRouter');
const users = require('./users');



routes.use('/item/', itemRouter);
routes.use('/order/', orderRouter);
routes.use('/users', users);


module.exports = routes;