/**
 * Th InMemoryDataPersistor keeps a global
 * account of all drones in memory
 */

function InMemoryDataPersistor(){

    /**
     * Our default in memory data
     */
    this.data = [
        /** Northampton based drone */
        {
            id: 0,
            name: "Seeker",
            location: {
                lat: 52.8405,
                long: 0.7027
            }
        },

        /** London based drone */
        {
            id: 1,
            name: "Jinx",
            location: {
                lat: 51.5074,
                long: 0.1278
            }
        },

        /** Milton Keynes based drone */
        {
            id: 2,
            name: "The Interceptor",
            location: {
                lat: 52.0406,
                long: 0.7594
            }
        },

        /** Leicester based drone */
        {
            id: 3,
            name: "Sir Robert",
            location: {
                lat: 51.6369,
                long: -2.1398
            }
        },
    ]

    /** Sets the internal data to the one provided
     * @param {*} data 
     */
    this.setData = function(data){
        this.data = data;
    }

}

module.exports = InMemoryDataPersistor;