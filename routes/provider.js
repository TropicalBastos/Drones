'use strict';

const routesConfig = require('./api');

/**
 * The provider is the exported module and
 * is what essentially provides the routes
 */
var provider = (function(){

    /**
     * Attaches route names and their callbacks
     * to the express handle
     * @param {Express} app 
     */
    const routes = app => {
        for(let i = 0; i < routesConfig.length; i++){
            let route = routesConfig[i];
            if(route.get)
                app.get(route.get, route.cb);

            if(route.post)
                app.post(route.post, route.cb);
        }
    }

    return routes;

})();

module.exports = provider;