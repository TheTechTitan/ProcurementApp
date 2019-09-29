const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//GoodReceipt
var goodReceiptSchema = Schema ({
    orderID: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
    supplierID: {
        // type: Schema.Types.ObjectId,
        // ref: 'Supplier'
        type: String
    },
    deliveryId : [{
        type : Schema.Types.ObjectId,
        ref: 'deliverySchema'
    }],
    confirmation : {
        type: String,
        require:true
    }
},
{ collection : 'goodReceiptSchema' });

mongoose.model('goodReceiptSchema', goodReceiptSchema);

module.exports = mongoose;