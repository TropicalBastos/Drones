'use strict';

const settings = require('../config/settings');
const DroneController = require('../controller/DroneController');

/**
 * The app's global routes configuration object
 * this gets picked up by the provider which eventually
 * adds it to the express app
 * 
 * @path - is the string that is the request path
 * @cb - is the express function that gets called 
 * upon request which returns the response
 */
const routes = [
    {
        get: '/',
        cb: (req, res) => {
            res.sendFile(settings.INDEX_PATH);
        }
    },

    {
        get: '/get-drones',
        cb: (req, res) => {
            DroneController.getDrones(req, res);
        }
    },

    {
        post: '/modify-drone',
        cb: (req, res) => {
            DroneController.rewriteDrone(req, res);
        }
    },

    /**
     * Match all other routes and route them to 
     * base url
     */
    {
        get: /\/.*/,
        cb: (req, res) => {
            res.sendFile(settings.INDEX_PATH);
        }
    },
];

module.exports = routes;