//Import model

const Todo = require("../models/Todo");

exports.createTodo = async(request,response)=>{
    try{
        //extract title and description from req body
        const {title, description} = request.body;
        //create a object and insert title and description 
        const output = await Todo.create({title,description});
        //send a success res flag
        response.status(200).json({
            success: true,
            data: output,
            message: "Entry created successfully"
        })
    }
    catch(err){
        console.log(err);
        response.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message
        })
    }
}