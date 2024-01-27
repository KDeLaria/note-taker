const notes = require("../db/db.json");

function getDatabase(req, res, next){
  req.database = notes; 
  next();
}

module.exports = getDatabase