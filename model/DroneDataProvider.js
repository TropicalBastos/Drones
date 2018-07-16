/**
 * DroneDataProvider.js
 * provides the data collected and produced in memory
 * by the InMemoryDataPersistor class
 * 
 * as this app is DB-less and data store-less we are using
 * an in memory data persistor to hold that data
 */

var DataPersistor = require('./InMemoryDataPersistor');

var dataProvider = (function(){

    const dataProvider = data => {
        this.dataPersistor = DataPersistor();
    }

    /** Gets all the drones' current data
     * @return {Array} array of drone data
     */
    dataProvider.getData = () => {
        return this.dataPersistor.data;
    }

    /**
     * Sets the data persistor's data to the passed array of data
     * @param {Array} data array of drone data to set
     */
    dataProvider.setData = data => {
        this.dataPersistor.setData(data);
    }

    /**
     * Modifies the data of a drone by the index of the drone passed
     * @param {Object} droneData - the data to overwrite
     * @throws Error - UndefinedIndex error
     */
    dataProvider.rewrite = droneData => {
        let index = null;
        var indexedDrone = this.dataPersistor.data.filter(drone, i => {
            index = i;
            return drone.id === data.id;
        });

        if(!index){
            throw new Error('Unknown index of drone');
        }

        this.dataPersistor.data[index] = droneData;
    }

    return dataProvider;

})();

module.exports = dataProvider;