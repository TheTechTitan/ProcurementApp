const express = require('express');
const router = express.Router();
var companyController = require('../controller/CompanyController');

router.post('/', (req, res) => {
    companyController.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.put('/:id', (req, res) => {
    companyController.updateCompany(req.params.id, req.body).then(data => {
        res.status(data.status).send({message: data.message, data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/', (req, res) => {
    companyController.getAll().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:id', (req, res) => {
    companyController.getOne(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.delete('/:id', (req, res) => {
    companyController.delete(req.params.id).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;