const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Invoice
var invoiceSchema = Schema ({
    orderId : [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    dispatchedDate : {
        type: Date,
        require:true
    },
    grandTotal : {
        type: String,
        require:true
    }
},
{ collection : 'invoiceSchema' });

mongoose.model('invoiceSchema', invoiceSchema);

module.exports = mongoose;