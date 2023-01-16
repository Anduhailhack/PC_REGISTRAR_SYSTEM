const express = require ("express");
const {DbAdapter} = require("../database/adapter")
const router = express.Router();

router.get("/getStudents/:lower_bound", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""}).end();
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
                        res.status(500).json({status : "error", msg : "Database connection error.", route : ""});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Student fetched successfully.", route : "", result : result});
                }
            })
        }else {
            res.status(500).json({status : "error", msg : "Lower bound must be provided.", route : ""});
        }
    }
    
})

router.get("/getStudent/:id", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""}).end();
    })

    if (req.params)
    {
        if (req.params.id)
        {
            adp.getStudent(req.params.id, (err, result) => {
                if (err) 
                {
                    if (err.code != 'ECONNREFUSED')
                    {
                        res.status(500).json({status : "error", msg : "Database connection error.", route : ""});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Student fetched successfully.", route : "", result : result});
                }
            })
        }
        else 
        {
            res.status(500).json({status : "error", msg : "Student ID must be provided.", route : ""});
        }
    }
})

router.get("/getDevice/:s_n", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""}).end();
    })

    if (req.params)
    {
        if (req.params.s_n)
        {
            adp.getDevice(req.params.s_n, (err, result) => {
                if (err) 
                {
                    if (err.code != 'ECONNREFUSED')
                    {
                        res.status(500).json({status : "error", msg : "Database connection error.", route : ""});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Device fetched successfully.", route : "", result : result});
                }
            })
        }
        else 
        {
            res.status(500).json({status : "error", msg : "Serial Number must be provided.", route : ""});
        }
    }
})

router.get("/getDevices/:stud_id", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""}).end();
    })

    if (req.params)
    {
        if (req.params.stud_id)
        {
            adp.getDevice(req.params.stud_id, (err, result) => {
                if (err) 
                {
                    if (err.code != 'ECONNREFUSED')
                    {
                        res.status(500).json({status : "error", msg : "Database connection error.", route : ""});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Device fetched successfully.", route : "", result : result});
                }
            })
        }
        else 
        {
            res.status(500).json({status : "error", msg : "Student ID must be provided.", route : ""});
        }
    }
})

router.get("/findStudent/:f_name", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""}).end();
    })

    if (req.params)
    {
        if (req.params.f_name)
        {
            adp.findStudent(req.params.f_name, (err, result) => {
                if (err) 
                {
                    if (err.code != 'ECONNREFUSED')
                    {
                        res.status(500).json({status : "error", msg : "Database connection error.", route : ""});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Student fetched successfully.", route : "", result : result});
                }
            })
        }
        else 
        {
            res.status(500).json({status : "error", msg : "Student's partial or full first name must be provided.", route : ""});
        }
    }
});

router.get("/findDevice/:brand/:type", (req, res) => {
    let adp = new DbAdapter("mysql");
    adp.connect((err) => {
        if (err) res.status(500).json({status : "error", msg : "Database connection error.", route : ""}).end();
    })

    if (req.params)
    {
        if (req.params.type && req.params.brand)
        {
            adp.findDevice(req.params.brand, (err, result) => {
                if (err) 
                {
                    if (err.code != 'ECONNREFUSED')
                    {
                        res.status(500).json({status : "error", msg : "Database connection error.", route : ""});
                    }
                }
                
                if (result)
                {
                    res.status(500).json({status : "success", msg : "Device fetched successfully.", route : "", result : result});
                }
            })
        }
        else 
        {
            res.status(500).json({status : "error", msg : "Device brand and type must be provided.", route : ""});
        }
    }
});

router.get("/*", (req, res) => {
    res.status(500).json({status : "error", msg : "Invalid request.", route : ""});
})

module.exports = router