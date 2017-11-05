// server/routes/assets/assets.js

const dataOpe = require('../../api/database');
const log     = require('../logs');

//!\ METHOD : create a new asset
// - @param http request and response
// - @return status = true, created
// - @return status = false, error
// - @return internal error
exports.createAsset = function(req, res){
	let asset = req.body;

	try{
		if(!asset){
			res.send({
				error: "Could not decode request",
			});
			return;
		}

		dataOpe.createAsset(asset)
			.then(data => {
				log.createLogs({name:asset.name, activity:'create asset'});
				res.json({status: true});
			})
			.catch(err => res.json({status: false}));
		return;

	}catch(err){
		res.send({
			error: "Internal error",
		});
		return;
	}
}

//!\ METHOD : find assets
// - @param http request and response
// - @return returned assets
// - @return status = false, error
// - @return internal error
exports.findAssets = function(req, res){
	let param = req.query;

	try{
		if(!param){
			res.send({
				error: "Could not decode request",
			});
			return;
		}

		dataOpe.findAssets(param)
			.then(assets => res.json(assets))
			.catch(err => res.json({status: false}));
		return;
		
	}catch(err){
		res.send({
			error: "Internal error",
		});
		return;
	}
}

//!\ METHOD : update asset
// - @param http request and response
// - @return returned asset
// - @return status = false, error
// - @return internal error
exports.updateAsset = function(req, res){
	let conditions = req.body.conditions;
	let update     = req.body.update;

	try{
		if(!conditions || !update){
			res.send({
				error: "Could not decode request",
			});
			return;
		}

		dataOpe.updateAsset(conditions, update)
			.then(asset => {
				log.createLogs({name:'manager', activity:'update asset with id: '+conditions._id});
				res.json({status: true});
			})
			.catch(err => res.json({status: false}));
		return;
		
	}catch(err){
		res.send({
			error: "Internal error",
		});
		return;
	}
}