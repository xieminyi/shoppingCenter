// src/shared/Assets/index.js

import React from 'react';

const helpers = {
	// find all assets under condtions
	fetchAssets(param) {
		let url = '/api/find-assets';
		if(param === {} || !param) {
			// no limitation for search
		}
		else{
			Object.keys(param).forEach(key => url += '?' + key + '=' + param[key]);
		}

		return fetch(url, {method: 'GET'})
			.then(result => {
				return result.json();
			})
			.then(assets => {
				return assets;
			})
			.catch(err => console.log(err));
	},
	// update asset by id
	updateAsset(conditions, update) {
		let url = '/api/update-asset';
	
		return fetch(url, {
			method: 'POST', 
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			  },
			body: JSON.stringify({
				conditions: conditions,
				update: update
			})})
			.then(result => {
				return result.json();
			})
			.then(asset => {
				return asset;
			})
			.catch(err => console.log(err));
	}
}

export default helpers;