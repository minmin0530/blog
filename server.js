const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/html/signup.html");
});

app.post("/regist_account", (req, res) => {
    console.log(req.body);
    res.json( req.body );
});

app.get("/signup.js", (req, res) => {
    res.sendFile(__dirname + "/js/signup.js");
});

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/css/style.css");
});

app.listen(port, () => {
    console.log(port + " listen...");
});