const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/CreateTodo");

//map with router
router.post("/createTodo",createTodo);

module.exports= router;