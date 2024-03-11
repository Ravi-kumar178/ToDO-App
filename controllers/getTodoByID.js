//import models
const Todo = require("../models/Todo");

exports.getTodoByID = async(req,res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        const response = await Todo.findById({_id: id});

        if(!response){
          return  res.status(404).json({
               success: false,
               message:"Data is not finding" ,
            })
        };

        res.status(200).json({
            success: true,
            data: response,
            message:"Message found at given ID"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data: "Server Error",
            message:err.message
        })
    }
}