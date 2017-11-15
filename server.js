var app = require('./api/base/app');
var port = process.env.NODE_PORT || 8000;

var server = app.listen(port, function () {
    console.log("Server listening on port " + port + "!");
});