// dependencies
var path = require("path");
const routes = require('express').Router();


//html routes
routes.get("/notes", (req, res) => { console.log("/notes");
    res.sendFile(path.join(__dirname, "./html/notes.html"));
});

routes.get("/", (req, res) => { console.log("*");
    res.sendFile(path.join(__dirname, "./html/index.html"));
});


module.exports = routes;