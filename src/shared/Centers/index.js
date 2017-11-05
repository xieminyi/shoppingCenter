// src/shared/fetchTesting/index.js

import React from 'react';

const helpers = {
	findCenters() {
		let url = '/api/find-centers';

		return fetch(url, {method: 'GET'})
			.then(result => {
				return result.json();
			})
			.then(centers => {
				return centers;
			})
			.catch(err => console.log(err));
	}
}

export default helpers;