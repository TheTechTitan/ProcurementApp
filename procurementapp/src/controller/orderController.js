const mongoose=require('../models/orderModel');
const {ObjectID} = require("mongodb");
const orderModel=mongoose.model('Order');


const orderController=function () {
    this.insertOrder = (order) => {
        return new Promise((resolve, reject) => {
            let newOrder = new orderModel({
                orderID:order.orderID,
                date:order.date,
                itemList:order.itemList
            });

            newOrder.save().then(() => {
                resolve({status: 200, message: "New Order is successfully added"})
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };

    this.insertOrderItem = (orderID,objID,qty) => {
        return new Promise((resolve, reject) => {

            orderModel.update({orderID: orderID},{$push:{"itemList":{"item":[ObjectID(objID)],"quantity":qty}}}).then((data) => {
                resolve({status: 200, message: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.getOrders = () => {
        return new Promise((resolve, reject) => {
            orderModel.find().populate('itemList').exec().then((data) => {
                resolve({status: 200, orders: data})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

    this.getOrderItemList = (orderID) => {
        return new Promise((resolve, reject) => {
            orderModel.findOne({orderID: orderID}).populate( 'itemList.item' ).exec().then((data) => {
                resolve({status: 200, itemList: data})
            }).catch(err => {
                reject({status: 404, message: "Error in finding the course"})
            })
        })
    };

    this.deleteOrderItem = (orderID,itemID) => {
        return new Promise((resolve, reject) => {

            orderModel.update({orderID: orderID},{$pull:{"itemList":{"_id":[ObjectID(itemID)]}}}).then((data) => {
                resolve({status: 200, message: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })

        })
    };
    
};
module.exports=new orderController();
