var express = require('express');
var app = express();
var db = require('./db');

var router = express.Router();

// Controllers
var taskController = require('../app/task/TaskController');

// Controllers routes
router.use('/tasks', taskController);

// API route
app.use('/api', router);

app.use(function (req, res) {
	res.status(404).json({ error: true, msg: "URL not found" });
});

module.exports = app;