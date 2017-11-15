var trimmer = function (req, res, next) {
	req.body = JSON.parse(JSON.stringify(req.body).replace(/"\s+|\s+"/g, '"'));
	next();
};

module.exports.trimmer = trimmer;