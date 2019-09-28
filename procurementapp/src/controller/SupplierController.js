const mongoose = require('../models/SupplierModel');
const schema = mongoose.model('SupplierModel');

const SupplierController = function () {
    this.insert = function (data) {
        return new Promise((resolve, reject) => {
            const supplier = new schema ({
                name: data.name,
                joinedDate: data.joinedDate,
                contactNumber: data.contactNumber,
                company: data.companyId,
                CanDeliver: data.canDeliver
            });
            supplier.save().then(() => {
                resolve({status:200, message: "Supplier registered successfully"});
            }).catch((err) =>{
                reject({status:500, message:"An error occurred" +err});
            })
        })
    };

    this.getAll = () => {
        return new Promise(((resolve, reject) => {
            schema.find().populate('company').exec().then((data) => {
                resolve({status:200, data: data});
            }).catch(err => {
                reject({status:500, message: "An error occurred" +err});
            })
        }))
    };

    this.getOne = (companyId) =>{
        return new Promise((resolve, reject) => {
            schema.find({_id:companyId }.populate('company').exec().then((data) => {
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
                resolve({status:200, message:"Supplier Updated", data: data});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err})
            })
        }))
    }

    this.delete = (id) => {
        return new Promise(((resolve, reject) => {
            schema.remove({_id:id}).then(() => {
                resolve({status:200, message:"Supplier Removed successfully"});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err});
            })
        }))
    }
};

module.exports = new SupplierController();