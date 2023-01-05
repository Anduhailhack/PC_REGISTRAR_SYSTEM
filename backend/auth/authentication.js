const router = require("express").Router();

router.post('/login', (req, res) => {
    res.end();
})

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.end();
})

module.exports = router