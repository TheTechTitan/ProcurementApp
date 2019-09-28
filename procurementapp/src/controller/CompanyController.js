const mongoose = require('../models/companyModel');
const schema = mongoose.model('CompanyModel');

const CompanyController = function () {
    this.insert = function (data) {
        return new Promise((resolve, reject) => {
            const company = new schema ({
                name: data.name,
                package: data.package,
            });
            company.save().then(() => {
                resolve({status:200, message: "Company registered successfully"});
            }).catch((err) =>{
                reject({status:500, message:"An error occurred" +err});
            })
        })
    };

    this.getAll = () => {
        return new Promise(((resolve, reject) => {
            schema.find().populate().exec().then((data) => {
                resolve({status:200, data: data});
            }).catch(err => {
                reject({status:500, message: "An error occurred" +err});
            })
        }))
    };

    this.getOne = (companyId) =>{
        return new Promise((resolve, reject) => {
            schema.find({_id:companyId }.populate().exec().then((data) => {
                    resolve({status:200, data:data});
                }).catch(err => {
                    reject({status:500, message: "An error occurred" +err});
                })
            )
        })
    };
    this.updateCompany = function(id,data){
        return new Promise(((resolve, reject) => {
            schema.update({_id:id}, data).exec().then((data) => {
                resolve({status:200, message:"Company Updated", data: data});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err})
            })
        }))
    }

    this.delete = (id) => {
        return new Promise(((resolve, reject) => {
            schema.remove({_id:id}).then(() => {
                resolve({status:200, message:"Company Removed successfully"});
            }).catch(err => {
                reject({status:500, message:"An error occurred " + err});
            })
        }))
    }
};

module.exports = new CompanyController();