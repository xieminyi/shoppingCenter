// database operations for log

'use strict';

const mongoose = require('mongoose');
const log = mongoose.model('logSchema');


//!\ METHOD : create a new log
// - @param new log
// - @return record of the log
// - @return error
exports.create_log = function(newLog) {
	let new_log = new log(newLog);
	return new Promise((resolve, reject) => {
		new_log.save((err, res) => {
			if(err) reject(err);
			resolve({status: true});
		});
	});
};

// !\ METHOD : find logs records
// - @param http request and response
// - @return record of logs
// - @return error
exports.find_logs = function(param) {
  	return new Promise((resolve, reject) => {
  		log.find({}, (err, logs) => {
			if(err) reject(err);
			resolve(logs);
		})
  	});
};
