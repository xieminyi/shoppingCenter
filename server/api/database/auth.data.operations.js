// database operation for auth

'use strict';

const mongoose = require('mongoose');
const auth = mongoose.model('authSchema');

// !\ METHOD : find auth token records
// - @param token
// - @return record of this token
// - @return error
exports.find_hash = function(hash) {
  	return new Promise((resolve, reject) => {
  		auth.find({hash: hash}, (err, hash) => {
			if(err || hash.length<=0) reject(err);
			resolve(hash);
		});
	})
};



