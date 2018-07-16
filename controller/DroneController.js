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
        res.send(JSON.stringify(drones));
    },

    /**
     * @return {Response} json dictating 
     * whether the rewrite was successful
     */
    rewriteDrone: (req, res) => {
        var drone = req.body.drone;

        if(!drone){
            res.send(JSON.stringify({ error: "No data provided" }))
        }

        try{
            global.dataProvider.rewrite(drone);
            res.send(JSON.stringify({ message: "success" }));
        }catch(err){
            res.send(JSON.stringify({ error: err }));
        }
    }

}

module.exports = controller;