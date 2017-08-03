var express = require('express');
var path = require('path');
var app = express();


module.exports = function(app) {
	//gets homepage and displays when url is /
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
	//gets survey page and displays when url is /survey
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});
	
	//gets form page and displays when url is /survey
	app.get('/form', function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/form.html"));
	});
	
	//gets homepage and displays when url is /survey
	app.get('/tvshows', function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/tvshows.html"));
	});
	

};
