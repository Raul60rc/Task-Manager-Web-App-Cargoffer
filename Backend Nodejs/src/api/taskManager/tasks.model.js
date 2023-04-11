const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

//This is the task model 

const taskSchema= new Schema (
    {
        task:{type:String, required:true},
        dateAssigned:{type:Date, required:true},
        deadline:{type:Date, required:true},
    }
);

const Task = mongoose.model ("taskSchema", taskSchema);
module.exports = Task;