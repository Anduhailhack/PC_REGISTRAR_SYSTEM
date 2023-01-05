const express = require ("express");
//const db = require("../database/adapter")
const router = express.Router();

router.get("/getStudents", (req, res) => {
    console.log(req.cookies);
})

router.get("/getStudent/:id", (req, res) => {
    const students = Array(
        {
            "id" : "DMU1303000",
            "name" : "Dave",
            "roll" : 1
        },
        {
            "id" : "DMU1303001",
            "name" : "Dave",
            "roll" : 2
        },
        {
            "id" : "DMU1303003",
            "name" : "Dave",
            "roll" : 3
        },
        {
            "id" : "DMU1303002",
            "name" : "Dave",
            "roll" : 4
        }
    );
    const temp = {
        "id" : "DMU1303004",
        "name" : "Dave",
        "roll" : 0
    };
    
    let bool = false;

    students.forEach((value, index, array) => {
        console.log(req.params.id == value.id);
        if (value.id === req.params.id)
        {
            res.json(value);
            bool = true;
        }
    })

    if (!bool)
    {
        res.status(400).json({msg : "Error, student with the ID of " + req.params.id + " not found"})
    }
})


module.exports = router