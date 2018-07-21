import axios from 'axios';
import routesConfig from '../../config/routes';

/**
 * Helper for getting drones in Promise form
 * is recycled by various components in our app
 */

export default {

    /** Gets drone data
     * @return Promise
     */
    getDrones: async () => {
        return new Promise((resolve, reject) => {
            axios.get(routesConfig.GET_DRONES).then((response) => {
                resolve(response.data);
            }).catch((reason) => {
                reject(reason);
            });
        });
    }

}