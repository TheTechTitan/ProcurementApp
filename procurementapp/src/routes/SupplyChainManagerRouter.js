const express = require('express');
const router = express.Router();
var deliveryController = require('../controller/supplyChainManagerController');

router.post('/', (req, res) => {
    deliveryController.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.put('/:id', (req, res) => {
    deliveryController.update(req.params.id, req.body).then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/', (req, res) => {
    deliveryController.getAll().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:id', (req, res) => {
    deliveryController.getOne(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.delete('/:id', (req, res) => {
    deliveryController.delete(req.params.id).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;