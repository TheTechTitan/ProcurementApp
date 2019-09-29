const express = require('express');
const routes = express.Router();

const itemRouter = require('./itemRouter');
const orderRouter = require('./orderRouter');

const enquiryRouter = require('./enquiryRouter');

const users = require('./users');
const company = require('./CompanyRouter');
const supplier = require('./SupplierRouter');

const goodsReceipt = require('./goodsReceiptRouter');
const delivery = require('./deliveryRouter');
const invoice = require('./invoiceRouter')
const supplyChainManager = require('./SupplyChainManagerRouter');

routes.use('/item/', itemRouter);
routes.use('/order/', orderRouter);

routes.use('/enquiry', enquiryRouter);

routes.use('/users', users);
routes.use('/company', company);
routes.use('/company', company);
routes.use('/supplier', supplier);

routes.use('/goodsReceipt', goodsReceipt);
routes.use('/delivery', delivery);
routes.use('/invoice', invoice);
routes.use('/supplyChainManager', supplyChainManager);



module.exports = routes;
