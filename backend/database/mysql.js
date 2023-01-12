const mysql = require('mysql');

class MySqlDB {
    constructor (host, user, pass, db_name)
    {
        this.host = host;
        this.user = user;
        this.pass = pass;
        this.db_name = db_name;
    }

    connect()
    {
        this.db = mysql.createConnection({
            host : this.host, 
            user : this.user, 
            pass : this.pass, 
            database : this.db_name
        });
            
        this.db.connect( err => {if (err) throw err});
    }

    connect(result)
    {
        this.db = mysql.createConnection({
            host : this.host, 
            user : this.user, 
            pass : this.pass, 
            database : this.db_name
        });
            
        this.db.connect(err => result(err));
    }

    setUser(email, user, pass, user_id)
    {
        this.db.query("INSERT INTO `user` (`email`, `username`, `password`, `user_id`) VALUES ('" + email + "', '" + user + "', '" + pass + "', '" + user_id + "');", (err) => {
            if (err) throw err;
        });
    }

    setUser(email, user, pass, user_id, result)
    {
        this.db.query("INSERT INTO `user` (`email`, `username`, `password`, `user_id`) VALUES ('" + email + "', '" + user + "', '" + pass + "', '" + user_id +"');", result);
    }

    getUser(user, result)
    {
        this.db.query("SELECT * FROM `user` WHERE `username` = '" + user + "';", result);
    }

    getStudent(id, result)
    {
        this.db.query("SELECT * FROM `student` WHERE `ID` = '" + id + "';", result);
    }

    getStudents(lower_bound, result)
    {
        this.db.query("SELECT * FROM `student` WHERE `roll_no` > '" + lower_bound + "' LIMIT 20;", result);
    }
}

module.exports = {MySqlDB};