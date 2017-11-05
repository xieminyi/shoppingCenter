// test/log.operations.test.js

const assert   = require("assert");

const chai 	 = require('chai');
const chaiHttp = require('chai-http');
const should 	 = chai.should();
chai.use(chaiHttp);

const server   = require('../server.js');
const logs    = require('../server/routes/logs');

describe("logs data operations", () => {
	//!\ TEST :
	// - functions
	describe("detect functions", () => {
		it("Should have functions: createLogs, findLogs", () => {
			assert.equal(typeof logs.createLogs, 'function');
			assert.equal(typeof logs.findLogs, 'function');
		});
	});
	//!\ TEST :
	// - implementations
	describe("function: createLogs", () => {
		//!\ TEST - successful responding:
		it("Should create new log", (done) => {
			let log = {
				name: 'Center A',			  
			  	activity: 'Update center information'
			};
			logs.createLogs(log)
				.then(act => {
					chai.expect(act).to.be.a('object');
					chai.expect(act).have.property('status').equal(true);
					done();
				});
		});
	});
	describe("function: findLogs", () => {
		//!\ TEST - successful responding:
		it("Should find some logs", (done) => {
			chai.request(server)
            	.get('/api/find-logs')
            	.end((err, res) => {
            		res.body.should.be.a('array');
            		res.body[0].should.have.property('name');
            		done();
            	});
		});
	});
});

