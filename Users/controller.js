const mysql = require('mysql');

const userDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Users'
});

//create a database
exports.createDB = (req, res)=>{
    var sql= 'CREATE DATABASE Users';
    userDB.query(sql, (err, result)=>{
        if (err) throw err;
        userDB.database= 'Users';
        res.json({
            status: "Success",
            message: "Database Created"
        })
    })
}

//useDB
exports.useDB = (req, res) => {
    var sql = 'USE Users;'
    userDB.query(sql, (err, result)=>{
        if (err) throw err;
        res.json({
            status: "Success",
            message: "Database Selected"
        })
    })
}

//create a table
exports.createTable = (req, res)=>{
    // const table = req.params.tableName;
    // var sql = `CREATE TABLE ${table}}(id int, firstName varchar(255), secondName varchar(255), department varchar(255))`;
    
    // const table = req.params.tableName;
    var sql = `CREATE TABLE UserInfo(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, firstName varchar(255) NOT NULL, secondName varchar(255), department varchar(255))`;

    userDB.query(sql, (err, result)=>{
        if (err) throw err;
        res.json({
            status: "Success",
            message: "Table Created"
        })
    })
}

//add a user 
exports.addUser = (req, res) => {
    var {firstName, secondName, department} = req.params;
    var sql = `INSERT INTO UserInfo(firstName, secondName, department) VALUES ('${firstName}', '${secondName}', '${department}')`;

    userDB.query(sql, (err, result)=>{
        if (err) throw err;
        console.log(`${firstName} is added`);
        res.json({
            status: "Success",
            message: `${firstName} is added`  
        })
    })
}

//get all users
exports.getAllUsers = (req, res)=>{
    var sql = `SELECT * FROM UserInfo`;
    
    userDB.query(sql, (err, result)=> {
        if (err) throw err;
        res.json(result);
    })
    
}
