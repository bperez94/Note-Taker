// dependencies
var express = require("express");
const htmlRoute = require("./public/routes/htmlRoutes");
const apiRoutes = require("./public/routes/apiRoutes");
var path = require("path");

//express set up
var app = express();
var PORT = process.env.PORT || 3000;

// handels data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// handles loading of pages
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',htmlRoute);
app.use('/',apiRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });