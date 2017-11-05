// center.operations.test.js

const assert   = require("assert");

const chai 	 = require('chai');
const chaiHttp = require('chai-http');
const should 	 = chai.should();
chai.use(chaiHttp);

const server   = require('../server.js');
const asset    = require('../server/routes/assets');

describe("Assets data operations", () => {
	//!\ TEST :
	// - functions
	describe("detect functions", () => {
		it("Should have functions: createAsset, findAssets, updateAsset", () => {
			assert.equal(typeof asset.createAsset, 'function');
			assert.equal(typeof asset.findAssets, 'function');
			assert.equal(typeof asset.updateAsset, 'function');
		});
	});
	//!\ TEST :
	// - implementations
	describe("function: createAsset", () => {
		//!\ TEST - successful responding:
		it("Should create new asset", (done) => {
			let asset = {
				name: 'Asset X002',			  
			  	dimensions: '50cm x 100cm x 250cm',
			  	center_name: '',
			  	status: 'inactive',
			  	location: 'Along side Super market'
			};
			chai.request(server)
            	.post('/api/create-asset')
            	.send(asset)
            	.end((err, res) => {
            		res.should.have.status(200);
            		res.body.should.be.a('object');
            		res.body.should.have.property('status').equal(true);
            		done();
            	});
		});
		it("Should create new asset", (done) => {
			let asset = {
				name: 'Asset X003',			  
			  	dimensions: '50cm x 100cm x 250cm',
			  	center_name: 'Center A',
			  	status: 'inactive',
			  	location: 'Along side Super market'
			};
			chai.request(server)
            	.post('/api/create-asset')
            	.send(asset)
            	.end((err, res) => {
            		res.should.have.status(200);
            		res.body.should.be.a('object');
            		res.body.should.have.property('status').equal(true);
            		done();
            	});
		});
	});
	describe("function: findAssets", () => {
		//!\ TEST - successful responding:
		it("Should find some assets", (done) => {
			chai.request(server)
            	.get('/api/find-assets')
            	.send({})
            	.end((err, res) => {
            		res.body.should.be.a('array');
            		res.body[0].should.have.property('name');
            		done();
            	});
		});
	});
	describe("function: updateAsset", () => {
		//!\ TEST - successful responding:
		it("Should update some assets", (done) => {
			chai.request(server)
            	.post('/api/update-asset')
            	.send({
            		conditions: {_id: 'testing-asset-id'},
            		update: {status: 'inactive'}
            	})
            	.end((err, res) => {
            		res.body.should.be.a('object');
            		res.body.should.have.property('status').equal(false);
            		done();
            	});
		});
	});
});

