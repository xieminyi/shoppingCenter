// center.operations.test.js

const assert   = require("assert");

const chai 	 = require('chai');
const chaiHttp = require('chai-http');
const should 	 = chai.should();
chai.use(chaiHttp);

const server   = require('../server.js');
const center    = require('../server/routes/centers');

describe("Shopping centers data operations", () => {
	//!\ TEST :
	// - functions
	describe("detect functions", () => {
		it("Should have functions: create_center, find_centers", () => {
			assert.equal(typeof center.createCenter, 'function');
			assert.equal(typeof center.findCenters, 'function');
		});
	});
	//!\ TEST :
	// - implementations
	describe("function: create_center", () => {
		//!\ TEST - successful responding:
		it("Should create new center with new associated assets", (done) => {
			let center = {
				name: 'Center A',			  // Shopping center address
			  	address: '111 Bay St, NSW, 2500',
			  	assets_id: [10, 21, 30]
			};
			let assets = [
				{
					name: 'Asset P1',			  
				  	dimensions: '50cm x 100cm x 250cm',
				  	center_name: 'Shopping Center ABC',
				  	status: 'active',
				  	location: 'East'
				},
				{
					name: 'Asset P2',			  
				  	dimensions: '50cm x 100cm x 250cm',
				  	center_name: 'Shopping Center ABC',
				  	status: 'active',
				  	location: 'North'
				}
			];
			chai.request(server)
            	.post('/api/create-center')
            	.send({center: center, assets: assets})
            	.end((err, res) => {
            		res.should.have.status(200);
            		res.body.should.be.a('object');
            		res.body.should.have.property('status').equal(true);
            		done();
            	});
		});
		it("Should create new center without new associated assets", (done) => {
			let center = {
				name: 'Shopping Center D',			  // Shopping center address
			  	address: '52 King Street, NSW, 2000',
			  	assets_id: [42,55,61]
			};
			let assets = [];
			chai.request(server)
            	.post('/api/create-center')
            	.send({center: center, assets: assets})
            	.end((err, res) => {
            		res.should.have.status(200);
            		res.body.should.be.a('object');
            		res.body.should.have.property('status').equal(true);
            		done();
            	});
		});
	});
	describe("function: find_centers", () => {
		//!\ TEST - successful responding:
		it("Should find some centers", (done) => {
			chai.request(server)
            	.get('/api/find-centers')
            	.send()
            	.end((err, res) => {
            		res.body.should.be.a('array');
            		res.body[0].should.have.property('name');
            		done();
            	});
		});
	});
});

