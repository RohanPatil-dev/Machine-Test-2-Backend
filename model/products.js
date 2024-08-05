const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    thumbnail : {
        type : String,
        required : true
    },
});


let products = mongoose.model('products',productSchema);

module.exports = products;