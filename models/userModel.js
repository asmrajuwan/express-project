const mongoose = require("mongoose");

const userSchema =mongoose.Schema({
    username:{
        type: String,
        required: [ true,"please add the user name"],
    },
    email:{
        type: String,
        required:[true, "please add the email"],
    },
    password:{
        type: String,
        required:[true, "enter the password"],
    },
},
   {
    timestamps: true,
   });

   module.exports = mongoose.model("User", userSchema);