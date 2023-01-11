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

    async getStudent()
    {

    }

    async getDevice()
    {

    }
}

module.exports = {DbAdapter};