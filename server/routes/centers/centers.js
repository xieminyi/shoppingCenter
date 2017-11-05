// server/routes/centers/centers.js

const dataOpe = require('../../api/database');

//!\ METHOD : create a new center
// - @param http request and response
// - @return status = true, created
// - @return status = false, error
// - @return internal error
exports.createCenter = function(req, res){
	let center = req.body.center; // center information
	let assets = req.body.assets; // array of new associated assets, maybe []

	try{
		if(!center){
			res.send({
				error: "Could not decode request",
			});
			return;
		}

		let associatedAssetsId = center.assets_id;
		if(assets && assets.length>0){ // associated with new assets
			let promises = assets.map(function(asset) {
				return new Promise((resolve, reject) => {
					dataOpe.createAsset(asset).then(asset => resolve(associatedAssetsId.push(asset.asset_id)));
				});
			});
			Promise.all(promises)
				.then(() => { 
					center.assets_id = associatedAssetsId; // update associated assets id
					dataOpe.createCenter(center)
						.then(center => res.json({status: true}))
						.catch(err => res.json({status: false}));
				})
				.catch(console.error);
		}
		else { // without new assets
			dataOpe.createCenter(center)
				.then(center => res.json({status: true}))
				.catch(err => res.json({status: false}));
		}

		return;

	}catch(err){
		res.send({
			error: "Internal error",
		});
		return;
	}
}

//!\ METHOD : find centers
// - @param http request and response
// - @return returned centers
// - @return status = false, error
// - @return internal error
exports.findCenters = function(req, res){
	let param = req.query;

	try{
		if(!param){
			res.send({
				error: "Could not decode request",
			});
			return;
		}

		dataOpe.findCenters(param)
			.then(centers => res.json(centers))
			.catch(err => res.json({status: false}));
		return;
		
	}catch(err){
		res.send({
			error: "Internal error",
		});
		return;
	}
}