var noteData = require("../db/db.json");
const routes = require('express').Router();


   
// api routes
routes.get("/api/notes", (req, res) => { console.log("/api/notes "+ JSON.stringify(noteData));
    res.json(noteData);
});
        
routes.post("/api/notes", (req, res) => { console.log("post /api/notes");
    noteData.push(req.body);
    res.json(noteData);
});

routes.delete('/api/notes/:id', (req, res) => { 
    res.send(noteData);
});
module.exports = routes;