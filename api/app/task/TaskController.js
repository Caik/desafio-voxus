var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var _ = require('underscore');

var task = require('./Task');
var utils = require('../../base/utils');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(utils.trimmer);

// Creating a new Task
router.post('/', function (req, res) {
	task.create({
		name: req.body.name,
		description: req.body.description,
		attachments: req.body.attachments,
		priority: req.body.priority,
		doneFlg: false,
		userCreate: req.body.userCreate,
		userDone: null
	}, function (err, task) {
		if (err) {
			return res.status(500).json({ error: true, msg: "Error while trying to insert a new Task" });
		}

		res.status(200).json({ sucess: true, msg: "Task inserted", task: task });
	});
});

// Retrieving all Tasks
router.get('/', function (req, res) {
	task.find({}, function (err, tasks) {
		if (err) {
			return res.status(500).json({ error: true, msg: "Error while trying to get Tasks" });
		}

		res.status(200).json(tasks);
	});
});

// Getting a Task
router.get('/:id', function (req, res) {
	task.findById(req.params.id, function (err, task) {
		if (err) {
			return res.status(500).json({ error: true, msg: "Error while trying to get Task with id: " + req.params.id });
		}
		if (!task) {
			return res.status(404).json({ error: true, msg: "Task not found! Id: " + req.params.id });
		}

		res.status(200).json(task);
	});
});

// Deleting a Task
router.delete('/:id', function (req, res) {
	task.findByIdAndRemove(req.params.id, function (err, task) {
		if (err) {
			return res.status(500).json({ error: true, msg: "Error while trying to delete Task with id: " + req.params.id });
		}

		res.status(200).json({ sucess: true, msg: "Task deleted. Id: " + req.params.id });
	});
});

// Updating a Task
router.put('/:id', function (req, res) {
	task.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, task) {
		if (err) {
			return res.status(500).json({ error: true, msg: "Error while trying to update Task with id: " + req.params.id });
		}

		res.status(200).json({ sucess: true, msg: "Task updated", task: task });
	});
});

module.exports = router;