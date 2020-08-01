// dependencies
var path = require("path");

module.exports = function(app) {
//html routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./html/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./html/index.html"));
});


};