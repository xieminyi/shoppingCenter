import React from 'react';
import './style.css';

import logo from './logo.svg';

import Main from '../Main';

const App = () => (
  <div>
  	<div class="container">
  		<img src={logo} className="App-logo" alt="logo" />
  	</div>
    <Main />
  </div>
)

export default App;
