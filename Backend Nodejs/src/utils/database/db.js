const mongoose = require("mongoose");
const mongo = require ("mongodb");

//add mongo atlas route below this code 

const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Database created");
    db.close();
});

