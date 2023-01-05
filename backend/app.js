const express = require ("express");
const process = require ("process");
const path = require("path");
const registrar = require("./routes/registrar");
const security = require("./routes/sec_check");
const auth = require("./auth/authentication");

const app = express();

app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/api/reg/", registrar);
app.use("/api/sec/", security);

app.use(express.json());
app.use("/api/auth/", auth);

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{console.log("Server started ....")});