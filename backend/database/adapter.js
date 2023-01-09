const { MySqlDB } = require("./mysql");
const config = require("./config.json");

class DbAdapter {
    
    constructor (DBTYPE)
    {
        this.DBTYPE = (DBTYPE) ? DBTYPE : "mysql";
    }

    async connect()
    {
        if (this.DBTYPE == "mysql")
        {
            this.db = new MySqlDB(config.mysql.host, config.mysql.user, config.mysql.pass, config.mysql.db_name);
            await this.db.connect();
        }
    }

    async setUser({email, username, password})
    {
        await this.db.setUser(email, username, password);
    }

    async setStudent()
    {

    }

    async setDevice()
    {

    }

    async getUser()
    {

    }

    async getStudent()
    {

    }

    async getDevice()
    {

    }
}

module.exports = {DbAdapter};