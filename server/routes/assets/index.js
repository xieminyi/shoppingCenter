// server/routes/assets/index.js

const asset = require('./assets');

module.exports = {
	createAsset: asset.createAsset,
	findAssets: asset.findAssets,
	updateAsset: asset.updateAsset
}