const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/CreateTodo");
const {getTodo} = require("../controllers/getTodo");
const {getTodoByID} = require("../controllers/getTodoByID");
const {updateTodo} = require("../controllers/updateTodo");
const {findByIDandDelete} = require("../controllers/findByIdAndDelete");

//map with router
router.post("/createTodo",createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id",getTodoByID);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id", findByIDandDelete);

module.exports= router;