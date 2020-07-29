var dbData = require("../db/db.json");

module.exports = function(app) {
   
// api routes
app.get("/api/notes", (req, res) => {
    res.json(dbData);
});
        
app.post("/api/notes", (req, res) => {
    dbData.push(req.body);
    res.json(dbData);
});
}