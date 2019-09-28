const express = require('express');
const routes = express.Router();

const itemRouter = require('./itemRouter');
const orderRouter = require('./orderRouter');

const enquiryRouter = require('./enquiryRouter');

const users = require('./users');
const company = require('./CompanyRouter');
const supplier = require('./SupplierRouter');




routes.use('/item/', itemRouter);
routes.use('/order/', orderRouter);

routes.use('/enquiry', enquiryRouter);

routes.use('/users', users);
routes.use('/company', company);
routes.use('/company', company);
routes.use('/supplier', supplier);



module.exports = routes;