// server/routes/logs/logs.js

const dataOpe = require('../../api/database');

exports.createLogs = function(log){
	return new Promise((resolve, reject) => {
		dataOpe.createLog(log)
			.then(res => {
				resolve(res);
			})
			.catch(err => reject({ status: false, error: err }));
	});
}

exports.findLogs = function(req, res){
	let param = req.query;

	try{
		if(!param){
			param = {};
		}

		dataOpe.findLogs(param)
			.then(logs => res.json(logs))
			.catch(err => res.json({status: false}));
		return;
		
	}catch(err){

		console.log(err);
		res.send({
			error: "Internal error",
		});
		return;
	}
}