const router = require("express").Router();
const {DbAdapter} = require("../database/adapter");

router.post('/login', (req, res) => {
    
    res.end();
})

router.post('/signup', (req, res) => {
    //TODO - Thinking about the session storage, which one is apropriate 
    if (req.body.email && req.body.username && req.body.password)
    {   //TODO - finding better validation method and considering hashing 
        if (_validateInput(req.body))
        {
            let apt = new DbAdapter("mysql");
            (async ()=>{
                await apt.connect().then(async ()=>{
                    //TODO - hashing password 
                    await apt.setUser(req.body).then(() => {
                        // TODO - Generate jwt, store session info, setting cookie,  
                    }).catch(()=>{
                        //TODO - Error handling, sending appropriate error response to user
                    });
                });
            })();
        }
    }
    res.end();
})

var _validateInput = ({email, username, password}) => {
    if (email.indexOf("@") <= 0)
    {
        return false;
    }

    if (email.indexOf(".") <= 3)
    {
        return false;
    }

    if (password.length < 6)
    {
        return false;
    }

    if (username.length < 5)
    {
        return false;
    }

    return true;
};

module.exports = router