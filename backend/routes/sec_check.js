const express = require ("express");
const {DbAdapter} = require("../database/adapter")
const router = express.Router();

router.get("/check/:service_id/:s_n", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""}).end();
    })

    if (req.params)
    {
        if (req.params.service_id && req.params.s_n)
        {
            adp.check(req.params.service_id, req.params.s_n, (err, result) => {
                if (err) 
                {
                    if (err.code != 'ECONNREFUSED')
                    {
                        res.status(500).json({status : "error", msg : "Database connection error.", route : ""});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Check successful.", route : "", result : result});
                }
            })
        }
        else 
        {
            res.status(500).json({status : "error", msg : "Student service ID and Device serial number must be provided.", route : ""});
        }
    }
})

router.get("/*", (req, res) => {
    res.status(500).json({status : "error", msg : "Invalid request.", route : ""});
})

module.exports = router