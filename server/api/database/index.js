// server/routes/database/index.js

const center = require('./center.data.operations');
const asset = require('./assets.data.operations');
const log = require('./log.data.operations');
const auth = require('./auth.data.operations');

module.exports = {
	createCenter: center.create_center,
	createAsset:  asset.create_asset,
	createLog:    log.create_log,

	findCenters: center.find_centers,
	findAssets:  asset.find_assets,
	findLogs:    log.find_logs,

	// updateCenter: center.update_centers,
	updateAsset:  asset.update_asset,
	// updateLog:    log.update_logs

	findHash:    auth.find_hash,
}