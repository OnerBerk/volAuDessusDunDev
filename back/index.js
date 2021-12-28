const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const app = express();
const port = process.env.PORT || 6000;
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({Project: ""})
})

app.use(express.static(path.join(__dirname, "front", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "front", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})