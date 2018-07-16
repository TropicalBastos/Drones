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
            id: 0111103,
            location: {
                lat: 52.2405,
                long: 0.9027
            }
        },

        /** London based drone */
        {
            id: 0501241,
            location: {
                lat: 51.5074,
                long: 0.1278
            }
        },

        /** Milton Keynes based drone */
        {
            id: 0898321,
            location: {
                lat: 52.0406,
                long: 0.7594
            }
        },

        /** Leicester based drone */
        {
            id: 0917209,
            location: {
                lat: 52.6369,
                long: 1.1398
            }
        },
    ]

}

module.exports = InMemoryDataPersistor;