// server/routes/auth/auth.js

const dataOpe = require('../../api/database');

const md5 = require('md5');

exports.validateToken = function(req, res){
	
	dataOpe.findHash(md5(req.query.token))
		.then(hash => {
			res.json({validated: true});
		})
		.catch(err => res.json({validated:false}));
	
}
