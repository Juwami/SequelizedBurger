let connection = require("./connection")

let orm = {
    selectAll: function(cb) {
        let query = "SELECT * FROM burgers";
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(name, cb) {
        let query = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(query, [name], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(id, cb) {
        let query = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(query, [id], function(err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    deleteOne: function(id, cb) {
        let query = "DELETE FROM burgers WHERE id = ?";
        connection.query(query, [id], function(err, result) {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm;