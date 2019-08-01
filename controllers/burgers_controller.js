// require express
let express = require("express");
// creat variable route for express
let router = express.Router();
// require burger from models
let db = require("../models")

// create route tables with express

router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
        // console.log(results)
        res.render("index", {
            burgers: results
        })
    })
})

router.post("/api/burgers", function (req, res) {
    console.log(req.body.burger_name)
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function (result) {
        res.json({
            id: result.insertID
        })
    })
});

router.put("/api/burgers/:id", function (req, res) {
    // let id = req.params.id

    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json({
            changed: result.changedRows
        })
    })
})

router.delete("/api/burgers/:id", function (req, res) {
    let id = req.params.id

    db.Burger.destroy({
        where: {
            id: id
        }
    }).then(function (result) {
        res.json({
            affected: result.affectedRows
        })
    })
})

// export route tables
module.exports = router