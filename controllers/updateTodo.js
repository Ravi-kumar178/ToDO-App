//import model

const Todo = require("../models/Todo");

exports.updateTodo = async(req,res)=>{
    try{
        const id = req.params.id;
        const {title,description} = req.body;

        if(!id){
            return res.status(404).json({
                success: false,
                message: "No Data present"
            })
        };

        //find by id and update
        const todos = await Todo.findByIdAndUpdate(
            {_id : id},
            {title, description, UpdatedAt:Date.now()}
        );
        res.status(200).json({
            success: true,
            data:todos,
            message:"updated successfully"
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            data:"Error in server connection",
            message:err.message
        })
    }
}