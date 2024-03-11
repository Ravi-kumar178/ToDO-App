const express = require("express");
const app = express();


require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

//import routes
const todoRoutes = require("./routes/todos") ;
/* console.log(todoRoutes); */

//mounting the route
app.use("/api/v1",todoRoutes);
/* console.log(app); */

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT,()=>{
    console.log(`App is started successfully at ${PORT}`);
});



//default route
app.get("/",(req,res)=>{
    res.send("<h1>This is home page</h1>");
})