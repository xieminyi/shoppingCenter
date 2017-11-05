// src/components/Log/index.js

import React from 'react';

import helpers from '../../shared/Log';

export default class Log extends React.Component {
	constructor(props) {
		super();
		this.state = { logs: [] };
	}

	componentDidMount() {
		helpers.findLogs()
			.then(logs => {
				this.setState({ logs: logs });
			});
	}

	render() {
		return (
				<div class="container">
					<h1>Activities Log</h1>
					<table class="table">
						<thead>
					      	<tr>
					        	<th>Shopping Center</th>
					        	<th>Activity</th>
					        	<th>Time</th>
					      	</tr>
					    </thead>
						<tbody>
				          	{this.state.logs.map(log =>
				          	<tr id={log.id}>
						    	<td>{log.name}</td>
						    	<td>{log.activity}</td>
								<td>{log.created_date.toString()}</td>
						  	</tr>
						  	)}
						</tbody>
			        </table>
			    </div>
		);	
	}
}