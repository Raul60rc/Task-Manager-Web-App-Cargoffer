const mongoose = require("mongoose");
const mongo = require ("mongodb");

//add mongo atlas route below this code 

const DB_URL = process.env.DB_URL;
console.log(DB_URL); // check if working now --> now working. 
const connectDB = async () =>{
    try{
        const db = await mongoose.connect(DB_URL);
        const { name, host } = db.connection;
    console.log(`connected to : ${name} in ${host}`);
        

    }catch (error){
        console.log("unable to connect with database",error);
    }
}

module.exports = {connectDB};