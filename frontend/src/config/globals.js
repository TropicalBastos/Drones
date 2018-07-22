import openSocket from 'socket.io-client';
import routes from './routes';

/**
 * Globals - shared resources
 */

var socket = null;

var globals = {
    socket:{
        start: () => startSocketService(),
        shared: socket
    }
}

/**
 * Initialise the global socket handle for the client
 * to share
 */
const startSocketService = () => {
    globals.socket.shared = openSocket(routes.MAIN_SOCKET_ADDR);
}

export default globals;