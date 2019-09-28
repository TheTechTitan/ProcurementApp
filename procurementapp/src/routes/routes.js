const express = require('express');
const routes = express.Router();

const itemRouter = require('./itemRouter');
const orderRouter = require('./orderRouter');


routes.use('/item/', itemRouter);
routes.use('/order/', orderRouter);

module.exports = routes;