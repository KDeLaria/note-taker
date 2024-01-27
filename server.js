const express = require("express");
const fs = require("fs");
const path = require("path");

const routes = require('./routes');///////////////

const PORT = 3001;
const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use(routes);//////////////////
//app.use(express.urlencoded({extend: true}));


// app.get('/notes', (req, res) => res.status(200).sendFile(path.join(__dirname, "public/notes.html")));

// app.post("/api/notes", (req, res) => {
//     console.log("Client DATA: " + req.body);//////////
//     res.json({datasent: req.body})/////////////
//     fs.appendFile("./db/db.json", req.body,// whatever noteTextarea is called
//     (err) => {
//         if (err) return res.status(500).json({error: err.message});
//         res.json({datafile: "updated"});
//     })
// });

// app.get('/api/notes', (req, res) =>{res.json(notes)});
  


// app.delete("/api/notes/:id", (req, res) => {});


// // 404 index loopback
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));

app.listen(PORT, () => {
    console.log(`Note taker app listening on http://localhost:${PORT}`)
});