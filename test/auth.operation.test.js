// test/auth.operation.test.js

const assert   = require("assert");

const chai 	 = require('chai');
const chaiHttp = require('chai-http');
const should 	 = chai.should();
chai.use(chaiHttp);

const server   = require('../server.js');
const auth    = require('../server/routes/auth');

describe("Auth functions", () => {
	//!\ TEST :
	// - functions
	describe("detect functions", () => {
		it("Should have functions: validateToken", () => {
			assert.equal(typeof auth.validateToken, 'function');
		});
	});
	//!\ TEST :
	// - implementations
	describe("function: validateToken", () => {
		//!\ TEST - successful responding:
		it("Should find matched token", (done) => {
			let input = {
				token: '123'
			};
			chai.request(server)
            	.get('/api/validate-token')
            	.query(input)
            	.end((err, res) => {
            		res.body.should.be.a('object');
            		res.body.should.have.property('validated').equal(true);
            		done();
            	});
		});
		//!\ TEST - fails responding:
		it("Should not find matched token", (done) => {
			let input = {
				token: '234'
			};
			chai.request(server)
            	.get('/api/validate-token')
            	.query(input)
            	.end((err, res) => {
            		res.body.should.be.a('object');
            		res.body.should.have.property('validated').equal(false);
            		done();
            	});
		});
	});
	
});

