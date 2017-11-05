// src/components/Main/index.js

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from '../Homepage';
import ShoppingCenter from '../ShoppingCenter';
import Assets from '../Assets';
import Log from '../Log';
import NotFound from '../NotFound';


const Main = () => (
	<main>
		<Switch>
			<Route exact path='/homepage' component={Homepage} />
			<Route exact path='/' render={()=>(
				<Redirect to='/homepage' />
			)} />
			<Route path='/shoppingcenter/:token' component={ShoppingCenter} />
			<Route path='/assets/:token' component={Assets} />
			<Route exact path='/log' component={Log} />
			<Route path='*' component={NotFound} />
		</Switch>
	</main>
)

export default Main;