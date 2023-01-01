const express = require ("express");
const router = express.Router();

router.get("/check/:id", (req, res) => {
    const students = Array();
    const temp = {
        "id" : "DMU1303137",
        "name" : "Dave",
        "roll" : 0
    };
    
    if (req.params.id !== temp.id)
    {
        res.status(400).json({
            msg : "Error, student not found!"
        });
    }

    if (req.params.id === temp.id)
        res.json(temp);
})

module.exports = router