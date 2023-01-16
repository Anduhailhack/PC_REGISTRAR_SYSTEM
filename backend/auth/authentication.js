const router = require("express").Router()
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const path = require("path")
const validator = require("validator")
const p_Validator = require("check-password-strength")
const jwt = require("jsonwebtoken")
const {DbAdapter} = require("../database/adapter")
const config = require("./config.json");

router.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, "../../frontend/login.html"));
})

router.post('/login', (req, res) => {
    if (req.body.username && req.body.password)
    {
        let isValid = _validateInput(req.body, true);
        if (isValid.status)
        {
            let adp = new DbAdapter("mysql");
            adp.connect(err => {if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""})});
            adp.getUser(req.body.username, async (err, result) => {
                if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""});

                if (result)
                {
                    if (result[0].password)
                    {
                        let logged = await bcrypt.compare(req.body.password, result[0].password);
                        if (logged)
                        {
                            let token = _createToken(result[0].user_id);
                            res.cookie("token", token, {
                                httpOnly : true,
                                maxAge : config.tokenExp * 1000
                            });
                            res.status(200).json({status : "success", msg : "User succefully logged in!", route : "/"});
                        }else {
                            res.status(200).json({status : "error", msg : "Unknown password!", route : ""});
                        } 
                    }else {
                        res.status(200).json({status : "error", msg : "Unknown username or password!", route : ""});
                    }
                }
            })
        }else {
            res.status(500).json({status : "error", msg : isValid.msg, route : "/api/auth/login"});
        }
    }
})

router.get('/signup', (req, res)=> {
    res.sendFile(path.join(__dirname, "../../frontend/signup.html"));
})

router.post('/signup', async (req, res, next) => {
    if (req.body.email && req.body.username && req.body.password)
    {   
        let isValid = _validateInput(req.body, false);

        if (isValid.status)
        {
            let adp = new DbAdapter("mysql");
            let salt = await bcrypt.genSalt();
            let password = await bcrypt.hash(req.body.password, salt);
            let user_id = crypto.createHash('md5').update(req.body.username + req.body.password).digest('hex');
            adp.connect(err => {if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""})});
            adp.setUser(req.body.email, req.body.username, password, user_id, err => {
                if (err) {
                    if (err.code){
                        if (err.code == 'ER_DUP_ENTRY' && err.sqlMessage.indexOf('email') != -1)
                        {
                            res.status(400).json({status : "error", msg : "Email already in use.", route : "",})
                        }

                        if (err.code == 'ER_DUP_ENTRY' && err.sqlMessage.indexOf('username') != -1)
                        {
                            res.status(400).json({status : "error", msg : "Username already in use.", route: ""})
                        }
                    }
                }else {
                    let token = _createToken(user_id);
                    res.cookie("token", token, {
                        httpOnly : true,
                        maxAge : config.tokenExp * 1000
                    });
                    res.status(201).json({status : "success", msg : "User succefully created!", route : "/"});
                }
            });
            
        }else {
            res.status(400).json({status : "success", msg : isValid.msg, route : "/"});
        }
    }else {
        res.status(400).json({status: "error", msg : "All inputs are required.", route : ""});
    }
})

var _createToken = (user_id) => {
    return jwt.sign({user_id}, config.secret, {
        expiresIn : config.tokenExp
    });
}

var _validateInput = ({email, username, password}, isLogin) => {
    if (!isLogin){
        if (!validator.isEmail(email))
        {
            return {status : false, msg : "Invalid email : email should look like eg. example@example.com"};
        }
    }

    if (p_Validator.passwordStrength(password) == 0)
    {
        return {status : false, msg : "Weak password : your password should be atleast 6 characters long alphanumaric string."};
    }

    if (username.length < 5)
    {
        return {status : false, msg : "Invalid username : username should be more than 5 characters!"};
    }

    if (!(/^@([A-Za-z])[A-Za-z0-9]/.test(username)))
    {
        return {status : false, msg : "Invalid username : username should start with '@' character followed by UPPERCASE or lowercase letter!"};
    }

    return {status : true};
}

module.exports = router