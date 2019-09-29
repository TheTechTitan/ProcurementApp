// import mongoose, {ScSchemahema} from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Enquiry
var enquirySchema = Schema ({
        enquiryID: {
            type : String,
            require: true   
        },
        enquiryAdditionalNote1: {
            type : String
        },
        enquiryAdditionalNote2 : {
            type : String          
        },
        enquiryAdditionalNote3 : {
            type: String
        },
        enquiryAdditionalNote4 : {
            type: String
        },
        enquiryAdditionalNoteOther : {
            type: String
        },
        priority : {
            type: String
        }, 
        enquiryAdditionalNoteDescription : {
            type: String
        },
        orderID : {
            type: Schema.Types.ObjectId,
            ref: 'orderModel'
        },

    },
    { collection : 'enquirySchema' });

mongoose.model('enquirySchema', enquirySchema);


//Feedback
var feedbackSchema = Schema ({
    enquiryID: {
        type: Schema.Types.ObjectId,
        ref: 'enquirySchema'
    },
    name: {
        type : String,
        required : true
    },
    date: {
        type : Date,
        default: Date.now(),
        required : true
    },
    message : {
        type : String,
        required : true
    },
   
},
    { collection : 'feedbackSchema' });

mongoose.model('feedbackSchema', feedbackSchema);


// //Connecting to the procurement construction Database
// mongoose.connect('mongodb://localhost:27017/Procurement',
//     { useNewUrlParser: true ,
//     useUnifiedTopology: true});
//     console.log("Database connection Successfull");

module.exports = mongoose;