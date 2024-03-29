const express = require("express");
const fs = require("fs");
const path = require("path");

const routes = require('./routes'); // Where the requests enter

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    //console.log(`Note taker app listening on port ${PORT}`)
});