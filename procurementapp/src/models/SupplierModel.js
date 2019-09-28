const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//SupplierModel Schema
const SupplierSchema = Schema({
    name: {
        type: String,
        required: true
    },
    joinedDate: {
        type: Date,
        required: true
    },
    prevOrderCount: {
        type: Number,
        required: true,
        default: 0
    },
    contactNumber: {
      type: String,
      required: true
    },
    company:{
        type: Schema.Types.ObjectId,
        ref: 'CompanyModel'
    },
    CanDeliver: {
        type: Boolean,
        default: false
    },
    supplierHealthScore : {
        type: Number,
        default: 100
    }
}, {collection : "SupplierModel"});

mongoose.model('SupplierModel', SupplierSchema);

module.exports = mongoose;