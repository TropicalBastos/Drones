var { server } = require('../server');
var assert = require('assert');
var chai = require('chai')
var chaiHttp = require('chai-http');
const should = chai.should;
const expect = chai.expect;
chai.use(chaiHttp);
var DataPersistor = require('../model/InMemoryDataPersistor');

describe('Get DroneController tests', () => {

    /** Mock data */
    inMemoryPersistor = new DataPersistor();
    var drone = inMemoryPersistor.data[0];

    /**
     * Tests get drones api route
     * checks if response can be converted to
     * array
     * 
     * passes test if the end result is an array
     */
    it('Should return json in #getDrones() function', (done) => {
        chai.request('localhost:8080')
        .get('/get-drones')
        .end((err, res) => {
            assert.equal(err, null);
            const json = JSON.parse(res.text);
            expect(json).to.be.a('array');
            done();
        });
    });

    /**
     * Tests the modification of drone properties
     * uses the in memory data persitor for the 
     * data model
     */
    it('Should display success message in #rewriteDrones() function', (done) => {
        drone.location.lat = 100.000;
        chai.request('localhost:8080')
        .post('/modify-drone')
        .send({drone: drone})
        .end((err, res) => {
            assert.equal(err, null);
            const json = JSON.parse(res.text);
            assert.deepEqual(json, { message: 'success' });
            done();
        });
    });

});