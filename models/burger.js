// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(tableCol, values, cb){
        orm.insertOne("burgers", tableCol, values, function(res){
            cb(res);
        })
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }

}
// Export at the end of the burger.js file.
module.exports = burger;