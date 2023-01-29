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
        this.db.query("INSERT INTO `user` (`email`, `user_name`, `password`, `user_id`) VALUES (?, ?, ?, ?);", [email, user, pass,  user_id], (err) => {
            if (err) throw err;
        });
    }

    setUser(email, user, pass, user_id, result)
    {
        this.db.query("INSERT INTO `user` (`email`, `user_name`, `password`, `user_id`) VALUES (?, ?, ?, ?);", [email, user, pass,  user_id], result);
    }

    getUser(user, result)
    {
        this.db.query("SELECT * FROM `user` WHERE `user_name` = ?;", [user], result);
    }

    getStudent(id, result)
    {
        this.db.query("SELECT * FROM `student` WHERE `stud_id` = ?;", [id], result);
    }

    getStudents(lower_bound, result)
    {
        this.db.query("SELECT * FROM `student` WHERE `roll_no` > ? LIMIT 20;", [lower_bound], result);
    }

    getDevice(serial_no, result)
    {
        this.db.query("SELECT * FROM `device` WHERE `serial_no` = ?;", [serial_no], result);
    }

    getDevices(stud_id, result)
    {
        this.db.query("SELECT * FROM `device` WHERE `stud_id` = ?;", [stud_id], result);
    }

    findStudent(f_name, result)
    {
        this.db.query("SELECT * FROM `student` WHERE `f_name` LIKE %?%;", [f_name], result);
    }

    findDevice(brand, type, result)
    {
        this.db.query("SELECT * FROM `device` WHERE `brand` = ? AND `device_type` = ?;", [brand, type], result);
    }

    check(service_id, serial_no, result)
    {
        this.db.query("SELECT * FROM `device` WHERE `service_id` = ? AND `serial_no` = ?;", [service_id, serial_no], result);
    }
}

module.exports = {MySqlDB};