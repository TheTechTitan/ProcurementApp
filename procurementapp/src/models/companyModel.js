const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CompanyModel Schema
const companySchema = Schema({
    name: {
        type: String,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('CompanyModel', companySchema);

module.exports = mongoose;