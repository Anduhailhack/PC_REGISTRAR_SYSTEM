const express = require ("express");
const {DbAdapter} = require('../database/adapter');
const router = express.Router();


router.get('/', (req, res) => {
    let username;
    if (res.locals.decodedToken)
    {
        if (res.locals.decodedToken.user_id)
        {
            const db = new DbAdapter("mysql");
            db.connect(err => {
                if (err) {
                    res.render("\index", {
                        data : {username: username}
                    });
                    return;
                }else {
                    db.getUserName(res.locals.decodedToken.user_id, (err, result) => {
                        if (err)
                        {
                            res.render("\index", {
                                data : {username: username}
                            });
                            return;
                        }

                        if (result)
                        {
                            if (result.length >= 1)
                            {
                                username = result[0].user_name;
                                res.render("\index", {
                                    data : {username: username}
                                });
                            }
                        }
                    })
                }
            });
        }else {
            res.render("\index", {
                data : {username: username}
            });
        }
    }else {
        res.render("\index", {
            data : {username: username}
        });
    }
})

router.get('/logout', (req, res) => {
    var username = undefined;
    res.cookie("token", '', {
        httpOnly : true,
        maxAge : -1
    });
    res.render("\index", {
        data : {username: username}
    });
})

router.get('/home', (req, res) => {
    let username;
    if (res.locals.decodedToken)
    {
        if (res.locals.decodedToken.user_id)
        {
            const db = new DbAdapter("mysql");
            db.connect(err => {
                if (err) {
                    res.render("\index", {
                        data : {username: username}
                    });
                    return;
                }else {
                    db.getUserName(res.locals.decodedToken.user_id, (err, result) => {
                        if (err)
                        {
                            res.render("\index", {
                                data : {username: username}
                            });
                            return;
                        }

                        if (result)
                        {
                            if (result.length >= 1)
                            {
                                username = result[0].user_name;
                                res.render("\index", {
                                    data : {username: username}
                                });
                            }
                        }
                    })
                }
            });
        }else {
            res.render("\index", {
                data : {username: username}
            });
        }
    }else {
        res.render("\index", {
            data : {username: username}
        });
    }
});

router.get('/about_us', (req, res) => {
    let username;
    if (res.locals.decodedToken)
    {
        if (res.locals.decodedToken.user_id)
        {
            const db = new DbAdapter("mysql");
            db.connect(err => {
                if (err) {
                    res.render("\about-us", {
                        data : {username: username}
                    });
                    return;
                }else {
                    db.getUserName(res.locals.decodedToken.user_id, (err, result) => {
                        if (err)
                        {
                            res.render("\about-us", {
                                data : {username: username}
                            });
                            return;
                        }

                        if (result)
                        {
                            if (result.length >= 1)
                            {
                                username = result[0].user_name;
                                res.render("\about-us", {
                                    data : {username: username}
                                });
                            }
                        }
                    })
                }
            });
        }else {
            res.render("\about-us", {
                data : {username: username}
            });
        }
    }else {
        res.render("\about-us", {
            data : {username: username}
        });
    }
});

router.get('/scan_qr', (req, res) => {
    let username;
    if (res.locals.decodedToken)
    {
        if (res.locals.decodedToken.user_id)
        {
            const db = new DbAdapter("mysql");
            db.connect(err => {
                if (err) {
                    res.render("\scan-qr", {
                        data : {username: username}
                    });
                    return;
                }else {
                    db.getUserName(res.locals.decodedToken.user_id, (err, result) => {
                        if (err)
                        {
                            res.render("\scan-qr", {
                                data : {username: username}
                            });
                            return;
                        }

                        if (result)
                        {
                            if (result.length >= 1)
                            {
                                username = result[0].user_name;
                                res.render("\scan-qr", {
                                    data : {username: username}
                                });
                            }
                        }
                    })
                }
            });
        }else {
            res.render("\scan-qr", {
                data : {username: username}
            });
        }
    }else {
        res.render("\scan-qr", {
            data : {username: username}
        });
    }
});
router.get('/contact_us', (req, res) => {
    let username;
    if (res.locals.decodedToken)
    {
        if (res.locals.decodedToken.user_id)
        {
            const db = new DbAdapter("mysql");
            db.connect(err => {
                if (err) {
                    res.render("\contact-us", {
                        data : {username: username}
                    });
                    return;
                }else {
                    db.getUserName(res.locals.decodedToken.user_id, (err, result) => {
                        if (err)
                        {
                            res.render("\contact-us", {
                                data : {username: username}
                            });
                            return;
                        }

                        if (result)
                        {
                            if (result.length >= 1)
                            {
                                username = result[0].user_name;
                                res.render("\contact-us", {
                                    data : {username: username}
                                });
                            }
                        }
                    })
                }
            });
        }else {
            res.render("\contact-us", {
                data : {username: username}
            });
        }
    }else {
        res.render("\contact-us", {
            data : {username: username}
        });
    }
});

router.get('/register', (req, res) => {
    let username;
    if (res.locals.decodedToken)
    {
        if (res.locals.decodedToken.user_id)
        {
            const db = new DbAdapter("mysql");
            db.connect(err => {
                if (err) {
                    res.render('register', {
                        data : {username: username}
                    });
                    return;
                }else {
                    db.getUserName(res.locals.decodedToken.user_id, (err, result) => {
                        if (err)
                        {
                            res.render('register', {
                                data : {username: username}
                            });
                            return;
                        }

                        if (result)
                        {
                            if (result.length >= 1)
                            {
                                username = result[0].user_name;
                                res.render('register', {
                                    data : {username: username}
                                });
                            }
                        }
                    })
                }
            });
        }else {
            res.render('register', {
                data : {username: username}
            });
        }
    }else {
        res.render('register', {
            data : {username: username}
        }); 
    }
});
module.exports = router;