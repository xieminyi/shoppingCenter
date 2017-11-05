// server/routes/centers/index.js

const center = require('./centers');

module.exports = {
	createCenter: center.createCenter,
	findCenters: center.findCenters
}