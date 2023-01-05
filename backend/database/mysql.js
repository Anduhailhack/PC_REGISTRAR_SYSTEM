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
    }

    setUser(email, user, pass)
    {
        this.db.connect((err) => {
            if (err) throw err;
            this.db.query("INSERT INTO `user` (`email`, `user`, `pass`) VALUES ('" + email + "', '" + user + "', '" + pass + "');");

        });
    }
}

module.exports = {MySqlDB};