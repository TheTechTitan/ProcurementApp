var mongoose = require('../models/SupplyChainManager');
var schema = mongoose.model('supplyChainManagerSchema');


const supplyChainManagerController = function () {
    this.insert = function (data) {
        return new Promise((resolve, reject) => {
            const SupplyChainManager = new schema ({
                assignedDate: data.assignedDate,
                invoiceID: data.invoiceID,
                deliveryID: data.deliveryID,
            });
            SupplyChainManager.save().then(() => {
                resolve({status:200, message: "Added successfully"});
            }).catch((err) =>{
                reject({status:500, message:"An error occurred" +err});
            })
        })
    };

    this.getAll = () => {
        return new Promise(((resolve, reject) => {
            schema.find().populate('invoiceId').exec().then((data) => {
                resolve({status:200, data: data});
            }).catch(err => {
                reject({status:500, message: "An error occurred" +err});
            })
        }))
    };

    this.getOne = (invoiceId) =>{
        return new Promise((resolve, reject) => {
            schema.find({_id:orderId }.populate('invoiceId').exec().then((data) => {
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
                resolve({status:200, message:" Updated", data: data});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err})
            })
        }))
    }

    this.delete = (id) => {
        return new Promise(((resolve, reject) => {
            schema.remove({_id:id}).then(() => {
                resolve({status:200, message:"Removed successfully"});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err});
            })
        }))
    }
};


module.exports = new supplyChainManagerController();