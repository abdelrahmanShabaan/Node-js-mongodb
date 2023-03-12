const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true, 

    },
    userMail: {
        type : string ,
        required : true, 

    }
})

module.exports = UserSchema;