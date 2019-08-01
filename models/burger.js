let orm = require("../config/orm");

// create code that will call the ORM functions using burger specific input for the ORM
let burger = {
    selectAll: function (cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function (name) {
        orm.insertOne(name, function(res) {
            // cb(res);
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne(id, function(res) {
            cb(res);
        });
    },
    deleteOne: function(id, cb) {
        orm.deleteOne(id, function(res) {
            cb(res);
        })
    }
}


module.exports = burger;