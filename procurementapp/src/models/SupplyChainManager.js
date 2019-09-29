const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//SupplyChainManager
var supplyChainManagerSchema = Schema ({
    assignedDate : {
        type: String,
        require:true
    },
    invoiceID: {
        type: Schema.Types.ObjectId,
        ref: 'invoiceSchema'
    },
    deliveryID: {
        type: Schema.Types.ObjectId,
        ref: 'deliverySchema'
    }
},
{ collection : 'supplyChainManagerSchema' });

mongoose.model('supplyChainManagerSchema', supplyChainManagerSchema);

module.exports = mongoose;