// dependencies
var express = require("express");

//express set up
var app = express();
var PORT = process.env.PORT || 3000;

// handels data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./public/routes/htmlRoutes")(app);
require("./public/routes/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });