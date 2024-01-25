const express = require("express");
const notes = require("./db/db.json");

const PORT = 3001;
const server = express();

server.use(express.static("public"));


server.listen(PORT, () => {
    console.log(`Note taker app listening on http://localhost:${PORT}`)
});