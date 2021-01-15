var mysql = require('mysql');


var con = mysql.createConnection({
    host:"",
    user:"root",
    password:"",
    database:"nodedb"
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connected to Database");
    /*
    con.query("CREATE DATABASE nodeDB",(err,result) =>{
        if(err) throw err;
        console.log("Database Created");
    })
    */


    var sql = "CREATE TABLE customers(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));" ;

    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Table Created");
    })

});



