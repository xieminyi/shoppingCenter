// src/component/Assets/index.js

import React from 'react';

import helpers from '../../shared/Assets';
import authHelpers from '../../shared/Auth';

import './style.css';

export default class Assets extends React.Component {
	constructor(props) {
		super();
		this.state = { assets: [], key: 'name', keyword: '', token: props.match.params.token };

		this.handleKeyChange = this.handleKeyChange.bind(this);
		this.handleKeywordChange = this.handleKeywordChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
	}

	componentWillMount() {
		let token = this.state.token;
		authHelpers.validateToken({token: token})
			.then(res => {
				if(!res || !res.validated){
					alert('Invalid asscess token');
					this.props.history.push('/homepage');
				}
			});
	}

	// Display all assets at beginning
	componentDidMount() {
		helpers.fetchAssets()
			.then(assets => {
				this.setState({ assets: assets });
			});
	}

	// Search form events
	handleKeywordChange(event) {
	    this.setState({keyword: event.target.value});
	}

	handleKeyChange(event) {
		this.setState({key: event.target.value});
	}

	handleSubmit(event) {
	    event.preventDefault();
	    let param = {};
	    param[this.state.key] = this.state.keyword;

	    helpers.fetchAssets(param)
			.then(assets => {
				this.setState({ assets: assets });
			});
	}

	// Update asset status
	handleUpdateStatus(event){
		let index = event.target.name;
		let allAssets  = this.state.assets;
		let currentAss = allAssets[index];
		let new_status = (currentAss.status === 'active')?'inactive':'active';
		helpers.updateAsset({_id: currentAss._id}, {status: new_status})
			.then(asset => {
				// Update current asset
				currentAss.status = new_status;
				// Update assets list
				allAssets[index]  = currentAss; 
				this.setState({ assets: allAssets });
			});
	}

	render() {
		return (
			<div class="container">
				<h1>Assets</h1>
				<form onSubmit={this.handleSubmit}>
					<div class="form-group">
					  	<label>
					    	<select value={this.state.key} onChange={this.handleKeyChange}>
								<option selected value="name">Name</option>
								<option value="center_name">Shopping Center Name</option>
								<option value="status">Status</option>
							</select>
							<input type="text" value={this.state.keyword} onChange={this.handleKeywordChange} />
					  	</label>
					</div>
				  	<input type="submit" class="btn btn-default" value="Search" />
				</form>
				<table class="table">
					<thead>
				      	<tr>
				        	<th>Assets Name</th>
				        	<th>Physical Dimensions</th>
				        	<th>Shopping center name</th>
				        	<th>Location</th>
				        	<th>Status</th>
				      	</tr>
				    </thead>
					<tbody>
			          	{this.state.assets.map((asset, index) =>
			          	<tr id={asset.id}>
					    	<td>{asset.name}</td>
					    	<td>{asset.dimensions}</td>
							<td>{asset.center_name}</td>
							<td>{asset.location}</td>
							<td>{asset.status === 'active' 
									? (<input type="button" class="btn btn-success" name={index} value={asset.status} onClick={this.handleUpdateStatus} />) 
									: (<input type="button" class="btn btn-warning" name={index} value={asset.status} onClick={this.handleUpdateStatus} />)}</td>
					  	</tr>
					  	)}
					</tbody>
		        </table>
		    </div>
		);	
	}
}