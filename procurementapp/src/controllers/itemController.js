const mongoose=require('../models/orderModel');
const itemModel=mongoose.model('Item');

const itemController=function () {
    this.insertItem = (item) => {
        return new Promise((resolve, reject) => {
            let newItem = new itemModel({
                itemID:item.itemID,
                name:item.name,
                price:item.price,
                description:item.description,
                deliverySite:item.deliverySite,
                dueDate:item.dueDate
            });

            newItem.save().then(() => {
                resolve({status: 200, message: "New Item is successfully added"})
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };

    this.getItems = () => {
        return new Promise((resolve, reject) => {
            itemModel.find().exec().then((data) => {
                resolve({status: 200, items: data})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

}
module.exports=new itemController();