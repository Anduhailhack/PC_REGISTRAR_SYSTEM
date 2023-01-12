const express = require ("express");
const {DbAdapter} = require("../database/adapter")
const router = express.Router();

router.get("/getStudents/:lower_bound", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : "f"}).end();
    })

    if (req.params)
    {
        if (req.params.lower_bound)
        {
            adp.getStudents(req.params.lower_bound, (err, result) => {
                if (err) 
                {
                    if (err.code != 'ECONNREFUSED')
                    {
                        res.status(500).json({status : "error", msg : "Database connection error.", route : "s"});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Student fetched successfully.", route : "", result : result});
                }
            })
        }
    }
    
})

router.get("/getStudent/:id", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : "f"}).end();
    })

    if (req.params)
    {
        if (req.params.lower_bound)
        {
            adp.getStudent(req.params.id, (err, result) => {
                if (err) 
                {
                    if (err.code != 'ECONNREFUSED')
                    {
                        res.status(500).json({status : "error", msg : "Database connection error.", route : "s"});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Student fetched successfully.", route : "", result : result});
                }
            })
        }
    }
})


module.exports = router