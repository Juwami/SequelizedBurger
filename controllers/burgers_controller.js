// require express
let express = require("express");
// creat variable route for express
let router = express.Router();
// require burger from models
let burger = require("../models/burger");

// create route tables with express

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let hbsObject = {
            burgers: data
        }
        // console log data pulled from mysql
        // console.log(data)
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", function (req, res) {
    // See Typed Name
    // console.log("Req.body:", req.body.burger_name)
    burger.insertOne([
        req.body.burger_name
    ], function (result) {
        // responding the results ID of what went into mySQL
        res.json({
            id: result.insertID
        })
    })
});

router.put("/api/burgers/:id", function (req, res) {
    let id = req.params.id
    burger.updateOne(id, function (result) {
        res.json({
            changed: result.changedRows
        })
    })
})

router.delete("/api/burgers/:id", function (req, res) {
    let id = req.params.id
    burger.deleteOne(id, function (result) {
        // console.log(result)
        res.json({
            affected: result.affectedRows
        })
    })
})

// export route tables
module.exports = router