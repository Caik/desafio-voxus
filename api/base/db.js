var mongoose = require('mongoose');

var connectionString = 'mongodb://mongo:' + process.env.MONGO_PORT + "/" + process.env.DB_NAME;
mongoose.connect(connectionString, { useMongoClient: true });