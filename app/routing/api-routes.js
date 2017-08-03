var tvShows = require('../data/tv-shows.js');




module.exports = function (app) {
	app.get('/api/survey', function(req, res) {
		res.json(tvShows);
	});
	
	
	app.post('/api/newshow', function(req, res) {
		res.json(tvShows);
		
		tvShows.push(req.body);
		console.log(tvShows);
		
	});
}


