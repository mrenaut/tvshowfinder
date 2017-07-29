

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
	res.sendFile(path.join(__dirname, "add.html"));
});

// Get all characters
app.get("/all", function(req, res) {
	res.json(characters);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:characters?", function(req, res) {
	var chosen = req.params.characters;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < characters.length; i++) {
			if (chosen === characters[i].routeName) {
				return res.json(characters[i]);
			}
		}
		return res.json(false);
	}
	return res.json(characters);
});