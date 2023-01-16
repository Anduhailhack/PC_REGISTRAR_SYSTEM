const { MySqlDB } = require("./mysql");
const config = require("./config.json");

class DbAdapter {
    
    constructor (DBTYPE)
    {
        this.DBTYPE = (DBTYPE) ? DBTYPE : "mysql";
    }

    connect()
    {
        if (this.DBTYPE == "mysql")
        {
            this.db = new MySqlDB(config.mysql.host, config.mysql.user, config.mysql.pass, config.mysql.db_name);
            this.db.connect();
        }
    }

    connect(result)
    {
        if (this.DBTYPE == "mysql")
        {
            this.db = new MySqlDB(config.mysql.host, config.mysql.user, config.mysql.pass, config.mysql.db_name);
            this.db.connect(result);
        }
    }

    setUser(email, username, password, user_id)
    {    
        this.db.setUser(email, username, password, user_id);  
    }

    setUser(email, username, password, user_id, result)
    {    
        this.db.setUser(email, username, password, user_id, result);  
    }

    async setStudent()
    {

    }

    async setDevice()
    {

    }

    getUser(user, pass, result)
    {
        this.db.getUser(user, pass, result);
    }

    getStudent(id, result)
    {
        this.db.getStudent(id, result);
    }

    getStudents(lower_bound, result)
    {
        this.db.getStudents(lower_bound, result);
    }

    getDevice(dev_id, result)
    {
        this.db.getDevice(dev_id, result);
    }

    getDevices(stud_id, result)
    {
        this.db.getDevices(stud_id, result);
    }

    findStudent(f_name, result)
    {
        this.db.findStudent(f_name, result);
    }

    findDevice(brand, type, result)
    {
        this.db.findDevice(brand, type, result);
    }

    check(service_id, serial_number, result)
    {
        this.db.check(service_id, serial_number, result);
    }
}

module.exports = {DbAdapter};