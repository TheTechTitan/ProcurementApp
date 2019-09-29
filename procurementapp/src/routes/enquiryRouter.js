var enquiryController = require('../controller/enquiryController');
var express= require('express');
var router = express.Router();


//Get All Enquiries
router.get('/', (req, res) => { enquiryController.get().then(data => {
    res.status(data.status).send(data.data);
}).catch(err => {
    res.status(err.status).send({message: err.message});
});
});

//Create Enquiry
router.post('/', function(req,res){
    enquiryController.createRecord(req.body).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(err=>{
        res.status(err.status).send({message: err.message});
    })
});

//Get Enquiry
router.get('/:enquiryID', (req, res) => { enquiryController.getEnquiry(req.params).then(data => {
    res.status(data.status).send(data.data);
}).catch(err => {
    res.status(err.status).send({message: err.message});
});
});


module.exports = router;