const express = require('express');
const controller = require('./controller');

const app = express();

app.use(express.json());


app.post('/createDB', controller.createDB)
app.post('/useDB', controller.useDB)
app.post('/createTable',controller.createTable)
app.post('/addUser/:firstName/:secondName/:department', controller.addUser)
app.get('/getAllUsers', controller.getAllUsers)



app.listen(5000, (req, res) => {
    console.log("Listening on 5000");
})