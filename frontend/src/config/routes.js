
/**
 * Routes config for frontend
 */

const MAIN_ADDR = 'http://localhost:8080';
const MAIN_SOCKET_ADDR = 'http://localhost:8090';

export default Object.freeze({
    GET_DRONES: MAIN_ADDR + '/get-drones',
    MODIFY_DRONE: MAIN_ADDR + '/modify-drone',
    MAIN_SOCKET_ADDR
});