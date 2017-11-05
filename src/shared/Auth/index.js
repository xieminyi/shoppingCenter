// src/shared/Auth/index.js

import React from 'react';

const authHelpers = {
	// validate token
	validateToken(param) {
		let url = '/api/validate-token';
		if(param === {} || !param) {
			return false;
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

export default authHelpers;