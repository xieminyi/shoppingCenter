// src/shared/Log/index.js

import React from 'react';

const helpers = {
	// find logs
	findLogs(param) {
		let url = '/api/find-logs';
		if(!param) {
			param = {};
		}
		else{
			Object.keys(param).forEach(key => url += '?' + key + '=' + param[key]);
		}

		return fetch(url, {method: 'GET'})
			.then(result => {
				return result.json();
			})
			.then(result => {
				return result;
			})
			.catch(err => console.log(err));
	}
}

export default helpers;