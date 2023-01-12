const express = require ("express");
const process = require ("process");
const path = require("path");
const c_Parser = require("cookie-parser")
const registrar = require("./routes/registrar");
const security = require("./routes/sec_check");
const auth = require("./auth/authentication");
const authorize = require("./auth/authorization");

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));     
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(c_Parser());

app.use("/api/reg/", authorize, registrar);
app.use("/api/sec/", authorize, security);
app.use("/api/auth/", auth);

const PORT = process.env.PORT || 5000
app.listen(PORT, '127.0.0.1', ()=>{console.log("Server started ....")});