const notes = require("../db/db.json");
// const fs = require("fs");

// function getDatabase(req, res, next) {
//   fs.readFile("../db/db.json", 'utf8', (err, data) => {
//   req.database = JSON.parse(data); 
//   next();
//   });
// }
function getDatabase(req, res, next){
  req.database = notes; 
  next();
}

module.exports = getDatabase