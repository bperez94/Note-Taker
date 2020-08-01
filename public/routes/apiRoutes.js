

module.exports = function(app) {
   
// api routes
app.get("/api/notes", (req, res) => {
    res.json(note);
});
        
app.post("/api/notes", (req, res) => {
    dbData.push(req.body);
    res.json(note);
});
}