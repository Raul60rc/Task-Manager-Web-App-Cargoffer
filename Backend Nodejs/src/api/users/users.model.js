const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

// Code below is the login model

const userSchema = new Schema(
    {
        email: {type: String, unique:true, required: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", function (next){
    //Encrypting the password 
    console.log();
    this.password = bcrypt.hashSync(this.password,10);
    console.log(this.password);
    next();
})

const User = mongoose.model("users", userSchema);
module.exports = User;