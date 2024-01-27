const router = require("express").Router();
const fs = require("fs");
const getDatabase = require("../../middleware/getDatabase.js");

// Add new note
// Pushes the new note into the database and  writes that database to file 
router.post("/notes", getDatabase, (req, res) => {
    const note = req.body;
    req.database.push(note);
    fs.writeFile("./db/db.json", JSON.stringify(req.database),
    (err) => {
        if (err) return res.status(500).json({error: err.message});
        res.json({database: "updated"});
    });
});

// sends the database
router.get('/notes', getDatabase, (req, res) =>{res.json(req.database)});
  

////////////////////////////////////////////////////////////////////////////////////////////////////
// Gets id parameter compares it to the notes in the database
// writes the database to file without the deleted note
router.delete("/notes/:id", getDatabase, (req, res) => {
    const deleteNote = req.params.id;
    console.log("you are here  title: " + deleteNote);
    // Searches for the note then delets it
    req.database.forEach(note => {
        if (note.title === deleteNote.title && note.text === deleteNote.text) {
            console.log("note found!");
            delete note;
            res.json({status: "note deleted"});
        }
    });
    // Rewrite database after delete
    fs.writeFile("./db/db.json", JSON.stringify(req.database),
    (err) => {
        if (err) return res.status(500).json({error: err.message});
        res.json({database: "updated"});
    });
});
///////////////////////////////////////////////////////////////////////////
module.exports = router;