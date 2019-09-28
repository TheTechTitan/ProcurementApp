const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const orderModel=new Schema({
    date: {
        type: Date,
        require: true
    },
    itemList:[
        {
           item:{
               type: Schema.Types.ObjectId,
               ref: 'Item',
               require: true
           },
            quantity: {
                type: Number
            }
        }
    ]
});

const itemModel = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    supplier: {
        type: Schema.Types.ObjectId,
        ref: 'SupplierModel',
        require: true
    },
    deliverySite: {
        type: String,
        require: true
    },
    dueDate: {
        type: Date,
        require: true
    }

});

/*const itemListModel=new Schema({
    orderID: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    itemID: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    quantity: {
        type: Number
    }
});*/

// mongoose.connect("mongodb://localhost:27017/Procurement", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
//     if (err) {
//         console.error(err);
//         process.exit(-1);
//     }
//     console.log("Connected successfully to MongoDB");
// });

mongoose.model("Order", orderModel);
mongoose.model("Item", itemModel);
//mongoose.model("ItemList", itemListModel);

module.exports = mongoose;