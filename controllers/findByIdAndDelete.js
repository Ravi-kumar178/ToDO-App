//import model
const Todo = require("../models/Todo");

exports.findByIDandDelete = async(req,res)=>{
    try{
        const id = req.params.id;

        if(!id){
            return res.status(404).json({
                success:false,
                message:"Data Not Found"
            });
        };
        const todo = await Todo.findByIdAndDelete({_id : id});
        
        res.status(200).json({
            success: true,
            message: "Todo Deleted"
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            error:err.message,
            message:"Server Error"
        })
    }
}