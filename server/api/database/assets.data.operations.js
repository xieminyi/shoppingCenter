// database operation for assets

'use strict';

const mongoose = require('mongoose');
const ass = mongoose.model('assetSchema');


//!\ METHOD : create a new asset
// - @param new asset object
// - @return record of the asset
// - @return error
exports.create_asset = function(asset) {
	let new_asset = new ass(asset);
	return new Promise((resolve, reject) => {
		new_asset.save((err, asset) => {
			if(err) reject(err);
			resolve({status: true, asset_id: asset._id});
		});
	});
};

// !\ METHOD : find assets records
// - @param object of find conditions
// - @return record of assets
// - @return error
exports.find_assets = function(param) {
  	return new Promise((resolve, reject) => {
  		ass.find(param, (err, assets) => {
			if(err) reject(err);
			resolve(assets);
		});
	})
};

// !\ METHOD : update assets
// - @param objects of conditions and updated elements
// - @return record of assets
// - @return error
exports.update_asset = function(conditions, update) {
  	return new Promise((resolve, reject) => {
  		ass.update(conditions, update, (err, asset) => {
			if(err) reject(err);
			resolve(asset);
		});
	})
};


