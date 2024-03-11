const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try{
        const todos = await Todo.find({});

       /*  if(!response){
            return res.status(404).json({
                success:false,
                message:"No Data is available"
            })
        }; */

        res.status(200).json({
            success:true,
            data: todos,
            message: "Data Fetched"
        });
    }

    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Error in Server Connection",
            message:err.message
        });
    }
}