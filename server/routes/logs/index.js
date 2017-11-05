// server/routes/logs/index.js

const log = require('./logs.js');

module.exports = {
	createLogs: log.createLogs,
	findLogs: log.findLogs
}