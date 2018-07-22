const assert = require('assert');
var DataProvider = require('../../model/DroneDataProvider');

describe('DroneDataProvider tests', () => {

    /** Mock data */
    var dataProvider = new DataProvider();

    /**
     * Should always return at least
     * one drone
     */
    it('Should return drone data', (done) => {
        var drones = dataProvider.getData();
        assert(drones.length > 1);
        done();
    });

    /**
     * Tests if we can set the DataProvider's
     * internal data correctly
     */
    it("Should correctly set the DataProvider's data", (done) => {
        var dummyData = [
            {
                test: 0
            },
            {
                test: 1
            }
        ];
        dataProvider.setData(dummyData);
        var result = dataProvider.getData();
        assert.deepEqual(result, dummyData);
        done();
    });

    /**
     * The rewrite function is successfully tested in
     * the DroneController test suite
     */

});