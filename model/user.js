const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: {
        type : String,
        unique : true,
        required : true
    },
    password :{
        type :String,
        required : true
    }
});

const user = mongoose.model('user', UserSchema );

module.exports = user