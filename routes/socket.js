const io = require('socket.io')();
const DEFAULT_SOCKET_PORT = 8090;

/**
 * Socket events, because realtime data updating is
 * the modern way!
 */

const start = (port = DEFAULT_SOCKET_PORT) => {

    const SERVICE_TYPE = 'SOCKET';

    io.on('connection', (client) => {

        /**
        * The frontend will send updated geo-coordinates which we will
        * need to update their location server-side
        */
       client.on('droneUpdated', (clientDrone) => {
           global.dataProvider.rewrite(clientDrone);
           io.sockets.emit('dataUpdate', global.dataProvider.getData());
       });
   
       console.log('A client has connected to the socket service');
   });
   
   io.listen(port);
   console.log(`Running additional service (${SERVICE_TYPE}) on port: ${port}`);
}

module.exports = {
    start,
    io
};