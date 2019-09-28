const express = require('express');
const routes = express.Router();

const itemRouter = require('./itemRouter');
const orderRouter = require('./orderRouter');
const enquiryRouter = require('./enquiryRouter');


routes.use('/item/', itemRouter);
routes.use('/order/', orderRouter);
routes.use('/enquiry', enquiryRouter);

module.exports = routes;