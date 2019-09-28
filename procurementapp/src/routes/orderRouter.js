const express = require('express');
const router = express.Router();
const orderController=require('../controller/orderController');

router.post('/add-order', (req, res, next) => {
    const body = req.body;
    orderController.insertOrder(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: "Error: " + err})
    })
});

router.post('/add-order-item/:orderID/:objID/:qty', (req, res, next) => {

    orderController.insertOrderItem(req.params.orderID,req.params.objID,req.params.qty).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.get('/get-orders', (req, res, next) => {

    orderController.getOrders().then((data) => {
        res.status(data.status).send(data.orders)
    }).catch(err => {
        res.status(err.status).send({message: "Error: " + err})
    })
});

router.get('/get-order/:orderID', (req, res, next) => {

    const params = req.params;
    orderController.getOrderItemList(params.orderID).then((data) => {
        res.status(data.status).send(data.itemList)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.delete('/delete-order-item/:orderID/:itemID', (req, res, next) => {

    orderController.deleteOrderItem(req.params.orderID,req.params.itemID).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

module.exports = router;