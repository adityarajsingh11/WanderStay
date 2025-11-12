const express = require("express");
const router = express.Router();


router.get("/",(req,res) => {
    res.send("GET for posts");
});

// show 
router.get("/:id",(req,res) => {
    res.send("GET for posts id ");
});

// POST 
router.post("/",(req,res) => {
    res.send("POST for posts id");
});

// delete 
router.delete("/:id",(req,res) => {
    res.send("DELETE  for posts id");
});

module.exports = router;
