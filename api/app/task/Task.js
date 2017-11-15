var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
	name: String,
	description: String,
	attachments: [String],
	priority: Number,
	doneFlg: Boolean,
	userCreate: String,
	userDone: String
});

mongoose.model('Task', taskSchema);

module.exports = mongoose.model('Task');