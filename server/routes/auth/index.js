// server/routes/auth/index.js

const auth = require('./auth.js');

module.exports = {
	validateToken: auth.validateToken
}