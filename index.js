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


    // var sql = "CREATE TABLE customers(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));" ;
    // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;" ;
    // var sql = "INSERT INTO customers(name,email) VALUES('Dan','dan90@com'); ";
    /*
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Table Created");
    })

     */

    /*
    var sql = "INSERT INTO customers(name,email) VALUES ?";
    var values = [
        ['Tim','tim@tim.com'],
        ['Tina','tina@tina.com'],
        ['Laura','laura@laura.com']
    ]

    con.query(sql,[values],(err,result)=>{
        if (err) throw err;
        console.log(`Record Inserted: ${result.affectedRows}`);
    });


     */

    /*
    var sql = "SELECT * FROM customers";
    con.query(sql,function (err,result,fields){
        if(err) throw err;
        console.log(result[0]['email']);
    });

     */

    /*
    var sql = "SELECT * FROM customers";
    con.query(sql,function(err,result,fields){
        if(err) throw err;
        for(let i=0; i < result.length; i++){
            console.log(result[i].name);
        }
    })


     */

    /*
    var sql = "SELECT name,id FROM customers";
    con.query(sql,function(err,result,fields){
        if(err) throw err;
        console.log(fields[0].name);
        console.log(result[0].name);
    })


     */

    var name_search = 't%';
    var id_search = 1;
    var sql = "SELECT * FROM customers WHERE name LIKE ? or id = ? ";
    con.query(sql,[name_search, id_search],function(err,result,fields){
        if (err) throw err;
        console.log(result);
    })




});



