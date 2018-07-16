'use strict';

const settings = require('./config/settings');
const express = require('express');
var bodyParser = require('body-parser');
var DataProvider = require('./model/DroneDataProvider');
var RouteProvider = require('./routes/provider');

/** Extract the necesarry constants */
const { PORT, HOST, FRONTEND_DIR } = settings;

/** App */
const app = express();

/** Static files are served through frontend  
 * Other middleware required also
*/
app.use(express.static(FRONTEND_DIR));
app.use(bodyParser.json({ extended: true }));

/** Initialise our global in-memory data provider */
global.dataProvider = new DataProvider();

/** Load our routes into the app */
RouteProvider(app);

/** Begin! */
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);