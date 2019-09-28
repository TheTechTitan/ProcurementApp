var mongoose = require('../models/enquiryModel');
var schema = mongoose.model('enquirySchema');


var enquiryController = function () {


    //Get All Enquiries
    this.get = () => {
        return new Promise((resolve, reject) => {
            schema.find().exec().then((data) => { resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error : " + err});
            }) })
    };

    //Create new Enquiry
    this.createRecord = function (data){
        return new Promise (function(resolve,reject){
            var enquiryRecord = schema ({
                enquiryID: data.enquiryID,
                enquiryAdditionalNote1: data.enquiryAdditionalNote1,
                enquiryAdditionalNote2: data.enquiryAdditionalNote2,
                enquiryAdditionalNote3: data.enquiryAdditionalNote3,
                enquiryAdditionalNote4: data.enquiryAdditionalNote4,
                enquiryAdditionalNoteOther: data.enquiryAdditionalNoteOther,
                priority: data.priority,
                enquiryAdditionalNoteDescription: data.enquiryAdditionalNoteDescription,
                orderID: data.orderID
            })
            enquiryRecord.save().then(function () {
                resolve({status: 200, message: "New Enquiry Created."});
            }).catch(err => {
                reject({status: 500, message: "Error :" + err});
            })
        })
    }


    //Get Enquiry
    this.getEnquiry = (data) => {
        return new Promise((resolve, reject) => {
            schema.find({"enquiryID" : data.enquiryID}).exec().then((data) => { resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error : " + err});
            }) })
    };


};

module.exports = new enquiryController();