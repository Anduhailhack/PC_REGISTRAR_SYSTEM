const { MySqlDB } = require("./mysql");
//import config from './config.json' assert {type: 'json'};
const config = require("./config.json");

class DbAdapter {
    
    constructor (DBTYPE)
    {
        this.DBTYPE = (DBTYPE) ? DBTYPE : "mysql";
        this.connect(this.DBTYPE);
    }

    connect(DBTYPE)
    {
        if (DBTYPE == "mysql")
        {
            this.db = new MySqlDB(config.mysql.host, config.mysql.user, config.mysql.pass, config.mysql.db_name);
            this.db.connect();
        }
    }

    setUser(email, username, password)
    {
        this.db.setUser(email, username, password);
    }

    setStudent()
    {

    }

    setDevice()
    {

    }

    getUser()
    {

    }

    getStudent()
    {

    }

    getDevice()
    {

    }
}

const adp = new DbAdapter();
adp.setUser("meka@gmail.com", "@meka", "password");