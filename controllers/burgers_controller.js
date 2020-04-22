
// Express
var express = require("express");
var router = express.Router();

// burger.js
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var bugerObject = {
            bugers : data
        }
        console.log(bugerObject)
        res.render("index", bugerObject);
    });
    
})


router.post("/api/burgers", function(req,res){

    burger.insertOne("burger_name", req.body.burger_name, function(data){
        res.json(data);
    })
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = "+req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(data){
        res.json(data);
    })
});

module.exports = router;