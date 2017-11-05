// database operations for centers

'use strict';

const mongoose = require('mongoose');
const cen = mongoose.model('centerSchema');


//!\ METHOD : create a new center
// - @param object of new shopping center
// - @return record of the center
// - @return error
exports.create_center = function(center) {
	let new_center = new cen(center);
	return new Promise((resolve, reject) => {
		new_center.save((err, center) => {
			if(err) reject(err);
			resolve({status: true});
		});
	});

};

// !\ METHOD : find centers records
// - @param  conditions
// - @return record of centers
// - @return error
exports.find_centers = function(param) {
  	return new Promise((resolve, reject) => {
  		cen.find(param, (err, centers) => {
			if(err) reject(err);
			resolve(centers);
		});
	})
};
