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
        this.db.query("SELECT * FROM `student` WHERE `id` = " + id + ";", result);
    }

    getStudents(lower_bound, result)
    {
        this.db.query("SELECT * FROM `student` WHERE `id` > '" + lower_bound + "' LIMIT 20;", result);
    }

    getDevice(dev_id, result)
    {
        this.db.query("SELECT * FROM `device` WHERE `dev_id` = '" + dev_id + "';", result);
    }

    getDevices(stud_id, result)
    {
        this.db.query("SELECT * FROM `device` WHERE `stud_id` = '" + stud_id + "';", result);
    }

    findStudent(f_name, result)
    {
        this.db.query("SELECT * FROM `student` WHERE `f_name` LIKE %" + f_name + "%;", result);
    }

    findDevice(brand, type, result)
    {
        this.db.query("SELECT * FROM `device` WHERE `brand` = '" + brand + "' AND `device_type` = '" + type + "';", result);
    }

    check(service_id, serial_number, result)
    {
        this.db.query("SELECT * FROM `device` WHERE `service_id` = '" + service_id + "' AND `serial_number` = '" + serial_number + "';", result);
    }
}

module.exports = {MySqlDB};