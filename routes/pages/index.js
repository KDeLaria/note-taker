const router = require("express").Router();
const path = require("path");

// notes page link
router.get('/notes', (req, res) => res.status(200).sendFile(path.join(__dirname, "../../public/notes.html")));

// 404 index loopback
router.get("*", (req, res) => res.sendFile(path.join(__dirname, "../../public/index.html")));

module.exports = router;