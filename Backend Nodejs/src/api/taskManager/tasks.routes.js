const express = require("express");
const router = express.Router();
const {verifyJwt} = require("../../utils/jwt/jwt");

const Task = require("../taskManager/tasks.model");

router.get("/getbytask/:task", async (req,res) =>{
    try{
        const task = req.params.task;
        const taskToFind = await Task.findOne({task:task});
        return res.status(200).json(taskToFind);
    }catch(error){
        return next(error);
    }
});

router.get("/getidbyuser/:user", async (req,res) => {
    try{
        const user = req.params.user;
        const userToFind = await Task.findOne({user : id});
        return res.status(200).json(userToFind);
    }catch (error){
        return next (error);
    }
});

router.post("/create", async (req,res)=> {
    try{
        const authorization = req.headers.authorization || "";
        
        if(!authorization || authorization === ""){
            return res.status(401).json("Unauthorized");
        }

        const verify = verifyJwt (authorization.replace("Bearer", ""));

        if(!verify){
            return res.status(401).json("Unauthorized");
        }

        const data ={
            task: req.body.task,
            dateAssigned: req.body.dateAssigned,
            deadline: req.body.deadline,
        };

        const item = await Task.findOneAndUpdate({_id: req.body.id}, data,{
            new:true,
        });
        return res.status(200).json(item);
    }catch (error) {
        return res.status(500).json(error);
    }
});

router.post("/edit", async (req,res)=>{
    try{
        const authorization = req.headers.authorization || "";

        if (!authorization || authorization === ""){
            return res.status(200).json("Unauthorized");
        }
        const verify = verifyJwt(authorization.replace("Bearer ", ""));

        if(!verify){
            return res.status(401).json("Unauthorized");
        }

        const data = {
            task : req.body.trade,
            dateAssigned : req.body.trade,
            deadline : req.body.deadline,
        };

        const item = await Task.findByIdAndUpdate({_id: req.body.id}, data,{
            new:true,
        });
        return res.status(200).json(item);
    }catch (error) {
        return res.status(500).json(error);
    }
});

router.post("/delete", async (req,res)=> { // To delete 
    try {
        const authorization= req.headers.authorization || "";

        if (!authorization || authorization === ""){
            return res.status.apply(401).json("Unauthorized");
        }

        const verify = verifyJwt(authorization.replace("Bearer", ""));

        if(!verify){
            return res.status(401).json("Unauthorized");
        }

        const item = await Task.findByIdAndDelete(req.body.id);
        return res.status(200).json(item);
    }catch (error){
        return res.status(500).json(error);
    }
});

router.get("/getbyid/:id", async (req, res) => { //
    try {
      const authorization = req.headers.authorization || "";
  
      if (!authorization || authorization === "") {
        return res.status(401).json("Unauthorized");
      }
  
      const verify = verifyJwt(authorization.replace("Bearer ", ""));
  
      if (!verify) {
        return res.status(401).json("Unauthorized");
      }
  
      const item = await Task.findById(req.params.id);
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

  router.get("/all", async (req, res) => {
    try {
      const authorization = req.headers.authorization || ""; // same logic as Token
  
      if (!authorization || authorization === "") {
        return res.status(401).json("Unauthorized");
      }
  
      const verify = verifyJwt(authorization.replace("Bearer ", ""));
  
      if (!verify) {
        return res.status(401).json("Unauthorized");
      }
  
      const items = await Task.find();
      return res.status(200).json(items);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  