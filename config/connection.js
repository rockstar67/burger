//LOCAL HOST
var mysql = require("mysql");

var connection;

//Create JawsDB for Heroku add-on application
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host : "localhost",
        port : 3306,
        user: "root", 
        password : "Loslocos459$",
        database : "burgers_db"
    });
}

connection.connect(function(err){
    if(err) {
        console.log("error connecting : "+err.stack);
    }
    console.log("connected as id : "+connection.threadId);
});

module.exports = connection;