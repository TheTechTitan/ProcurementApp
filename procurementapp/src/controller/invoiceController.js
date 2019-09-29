var mongoose = require('../models/Invoice');
var schema = mongoose.model('invoiceSchema');


const invoiceController = function () {
    this.insert = function (data) {
        return new Promise((resolve, reject) => {
            const invoice = new schema ({
                orderID: data.orderID,
                dispatchedDate: data.dispatchedDate,
                grandTotal: data.grandTotal
            });
            invoice.save().then(() => {
                resolve({status:200, message: "Invoice added successfully"});
            }).catch((err) =>{
                reject({status:500, message:"An error occurred" +err});
            })
        })
    };

    this.getAll = () => {
        return new Promise(((resolve, reject) => {
            schema.find().populate('orderId').exec().then((data) => {
                resolve({status:200, data: data});
            }).catch(err => {
                reject({status:500, message: "An error occurred" +err});
            })
        }))
    };

    this.getOne = (orderId) =>{
        return new Promise((resolve, reject) => {
            schema.find({_id:orderId }.populate('orderId').exec().then((data) => {
                    resolve({status:200, data:data});
                }).catch(err => {
                    reject({status:500, message: "An error occurred" +err});
                })
            )
        })
    };
    this.update = function(id,data){
        return new Promise(((resolve, reject) => {
            schema.update({_id:id}, data).exec().then((data) => {
                resolve({status:200, message:"Invoice Updated", data: data});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err})
            })
        }))
    }

    this.delete = (id) => {
        return new Promise(((resolve, reject) => {
            schema.remove({_id:id}).then(() => {
                resolve({status:200, message:"Invoice Removed successfully"});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err});
            })
        }))
    }
};
module.exports = new invoiceController();