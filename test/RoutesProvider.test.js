var { server, app, io } = require('../server');
var assert = require('assert');
var chai = require('chai')
var chaiHttp = require('chai-http');
const should = chai.should;
const expect = chai.expect;
chai.use(chaiHttp);
const routes = require('../routes/api');

/**
 * Safety tests to check that all of the server's routes 
 * are alive and well
 */
describe('Check that all routes work', () => {

    var completedRequests = 0;

    it('All routes should be alive after server initiation',  (done) => {

        /**
         * If request count equals route count complete the tests
         * @param {*} done the function that completes the test run
         */
        const allDone = (done) => {
            if(completedRequests === routes.length){
                done();
            }
        }

        /**
         * Loop through each route endpoint
         * and increment request count upon callback
         */
        routes.forEach((route) => {
            isGet = (route.get) ? true : false;

            /** One of the routes is a catch all 
             * - skip it and increment completed requests counter
             * */
            if(isGet instanceof RegExp){
                completedRequests++;
                return;
            }

            if(isGet){
                chai.request('localhost:8080')
                .get(route.get)
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    completedRequests++;
                    allDone(done);
                });
            }else{
                chai.request('localhost:8080')
                .post(route.post)
                .send({ data: true })
                .end((err, res) => {
                    assert.equal(res.status, 200);
                    completedRequests++;
                    allDone(done);
                });
            }
        })
    });

    /**
     * Close server after all tests complete
     * close the socket service too!
     */
    after(() => {
        io.close();
        server.close();
    })

});