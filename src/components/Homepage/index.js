// src/components/Homepage/index.js

import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class Home extends React.Component{
	constructor() {
		super();
		this.state = { token: null };

		this.handleTokenChange = this.handleTokenChange.bind(this);
	}

	handleTokenChange(event) {
	    this.setState({token: event.target.value});
	}

	render() {
		return (
			<div class="container">
			    <h1>Homepage</h1>
			    <label>Access Token</label><input type="text" value={this.state.token} onChange={this.handleTokenChange}/>
			    <label>Test Access Token: 123</label>
			    <ul class="list-group">
			    	<li class="list-group-item"><Link to={`/shoppingcenter/${this.state.token}`}>Shopping center</Link></li>
			    	<li class="list-group-item"><Link to={`/assets/${this.state.token}`}>Assets</Link></li>
			    	<li class="list-group-item"><Link to="/log">Logs</Link></li>
			    </ul>
			</div>
		);
	}
} 

