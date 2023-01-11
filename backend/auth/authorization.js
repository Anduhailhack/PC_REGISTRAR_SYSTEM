const jwt = require("jsonwebtoken")
const config = require("./config.json")

var authorize = (req, res, next) => {
    let token;
    if (req.cookies){
        token = req.cookies.token;
    }

    if (token)
    {
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if (err){
                res.status(401).json({status : 'error', msg : "Unauthorized user : please login!", route : "/api/auth/login"});
            }else {
                next();
            }
        })
    }else {
        res.status(401).json({status : 'error', msg : "Unauthorized user : please login!", route : "/api/auth/login"});
    }
}

module.exports = authorize;