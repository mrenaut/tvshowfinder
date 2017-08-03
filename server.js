// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;



// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));
 



//place this under your other middleware
app.use(express.static(__dirname + "/app/public"));

// allows access to the api routes 
require("./app/routing/api-routes.js")(app);
//
// allows access to the html routes
require("./app/routing/html-routes.js")(app);


// Sets up the listener
app.listen(PORT, function() {
	console.log("app listening on port", PORT);
});
