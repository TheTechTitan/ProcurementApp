const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Delivery
var deliverySchema = Schema ({
    deliverRoute: {
        type: String
    },
    driverInfo: {
        type: String
    },
    orderId : {
        // type: Schema.Types.ObjectId,
        // ref: 'Order'
        type: String
    },
    status : {
        type: String,
        require:true
    }
},
{ collection : 'deliverySchema' });

mongoose.model('deliverySchema', deliverySchema);

module.exports = mongoose;