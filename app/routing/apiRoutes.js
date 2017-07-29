// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Basic route that sends the user first to the AJAX Page
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/tvshows", function(req, res) {
	res.sendFile(path.join(__dirname, "tvshows.html"));
});

// Create New Characters - takes in JSON input
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  this needs to be changed to new info from the tv survey
app.post("/api/new", function(req, res) {
	var newcharacter = req.body;
	newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

	console.log(newcharacter);

	characters.push(newcharacter);

	res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
