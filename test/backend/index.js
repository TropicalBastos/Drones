
/** 
 * SERVER SIDE TESTS
 * Tests index file
 * This dictates the order of tests
 * each required module is a test case that will run in synchronous order
 */

console.log("RUNNING SERVER-SIDE TESTS...\n");
require('./DroneController.test');
require('./DroneDataProvider.test');
require('./RoutesProvider.test');
