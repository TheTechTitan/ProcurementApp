var mongoose = require('../models/GoodsReceipt');
var schema = mongoose.model('goodReceiptSchema');


const goodsReceiptController = function () {
    this.insert = function (data) {
        return new Promise((resolve, reject) => {
            const goodsReceipt = new schema ({
                orderID: data.orderID,
                supplierID: data.supplierID,
                deliveryId: data.deliveryId,
                confirmation: data.confirmation
            });
            goodsReceipt.save().then(() => {
                resolve({status:200, message: "Goods Receipt added successfully"});
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
                resolve({status:200, message:"Goods Receipt Updated", data: data});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err})
            })
        }))
    }

    this.delete = (id) => {
        return new Promise(((resolve, reject) => {
            schema.remove({_id:id}).then(() => {
                resolve({status:200, message:"Goods Receipt Removed successfully"});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err});
            })
        }))
    }
};
module.exports = new goodsReceiptController();