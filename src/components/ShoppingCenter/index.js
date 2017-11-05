// src/components/ShoppingCenter/index.js

import React from 'react';

import helpers from '../../shared/Centers';
import authHelpers from '../../shared/Auth';

import './style.css';

export default class ShoppingCenter extends React.Component {
	constructor(props) {
		super();
		this.state = { centers: [], token: props.match.params.token};
	}

	componentWillMount() {
		let token = this.state.token;
		authHelpers.validateToken({token: token})
			.then(res => {
				if(!res || !res.validated){
					alert('Invalid access token');
					this.props.history.push('/homepage');
				}
			});
	}

	componentDidMount() {
		helpers.findCenters()
			.then(centers => {
				this.setState({ centers: centers });
			});
	}

	render() {
		return (
				<div class="container">
					<h1>Shopping Centers</h1>
					<table class="table">
						<thead>
					      	<tr>
					        	<th>Shopping Center</th>
					        	<th>Address</th>
					        	<th>Number of Associated Assets</th>
					        	<th>Created Time</th>
					      	</tr>
					    </thead>
						<tbody>
				          	{this.state.centers.map(center =>
				          	<tr id={center.id}>
						    	<td>{center.name}</td>
						    	<td>{center.address}</td>
						    	<td>{center.assets_id.length}</td>
								<td>{center.created_date.toString()}</td>
						  	</tr>
						  	)}
						</tbody>
			        </table>
			    </div>
		);	
	}
}