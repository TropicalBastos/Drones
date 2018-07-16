/**
 * The controller for any drone related api request
 * recycles the global data provider and returns necessary
 * data in JSON
 */

const controller = {

    /**
     * @return {Response} a json response of all the current drones 
     */
    getDrones: (req, res) => {
        var drones = global.dataProvider.getData();
        return res.send(JSON.stringify(drones));
    }

}

module.exports = controller;