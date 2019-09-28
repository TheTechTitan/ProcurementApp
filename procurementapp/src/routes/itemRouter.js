const express = require('express');
const router = express.Router();
const itemController=require('../controller/itemController');


router.post('/add-item', (req, res, next) => {
    const body = req.body;
    itemController.insertItem(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send({message: "Error: " + err})
    })
});

router.get('/get-items', (req, res, next) => {
    itemController.getItems().then((data) => {
        res.status(data.status).send(data.items)
    }).catch(err => {
        res.status(err.status).send({message: "Error: " + err})
    })
});


module.exports = router;