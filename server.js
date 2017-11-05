const express = require('express'),
	  morgan = require('morgan'),
      bodyParser = require('body-parser'),
      path = require('path');
	  app = express();

// Mongodb setup
const mongoose 	 = require('mongoose');
const config     = require('./server/config');

// Initiate mongodb
const centerSchema  = require('./server/api/centers');
const assetSchema  = require('./server/api/assets');
const logSchema  = require('./server/api/logs');
const authSchema  = require('./server/api/auths');
mongoose.connect(config.mongodb.url, {
	useMongoClient: true,
}); 

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


app.all('/*', (req, res, next) => { // Enable Cross Origin Resource Sharing
	//CORS headers
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	// Set custom headers for CORS
	res.header("Access-Control-Allow-Headers", "Content-type,Accpet,X-Access-Token,X-key");
	if(req.method == "OPTIONS"){
		res.status(200).end();
	}
	else{
		next();
	}
});

// The list of routes for our application.
app.use('/', require('./server/routes')); 

// If no route is matched by now, it must be a 400
app.use((err, req, res, next) => {
	// Log err and time to log file /var/log/myserver.log
	console.log(new Date+': Fail to load payloads since JSON parsing failed');
	
  	res.status(400);
  	res.setHeader('Content-Type', 'application/json');
  	res.send(JSON.stringify({
    	error:'Could not decode request: JSON parsing failed'
  	}, null, 3));
});

console.log(__dirname);

// Serve static assets
app.use(express.static(path.resolve(__dirname, '.', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
 
const server = app.listen(PORT, () => { // Start the server
  console.log(`Server starts at ${PORT}`);
});

// for testing
module.exports = app; 