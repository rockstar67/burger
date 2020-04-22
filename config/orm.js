// Import (require) connection.js into orm.js
var connection = require("./connection.js");


var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM ";
        queryString += table;
        connection.query(queryString, function(err, result){
            if(err){
                console.log(err)
            }
            cb(result);
        });
    },
    insertOne: function(table, tableCol, value, cb){
        var queryString = "INSERT INTO ";
        queryString += table;
        queryString += " ("+tableCol+") ";
        queryString += "VALUES ";
        queryString += "( '" +value+"')";

        connection.query(queryString, function(err, result){
            if(err){
                console.log(err)
            }
            cb(result);
        })

    },
    updateOne: function(table, objValues, condition, cb){
        objToSql(objValues);
        var queryString = "UPDATE ";
        queryString += table ;
        queryString += " SET ";
        queryString += objToSql(objValues);
        queryString += " WHERE "
        queryString += condition;

        connection.query(queryString, function(err, result){
            if(err){
                console.log(err)
            }
            cb(result);
        })

    }
}

function objToSql(obj){
    var arr = [];
    for(var key in obj){
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Export the ORM object in module.exports.
module.exports = orm;