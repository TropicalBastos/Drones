'use strict';

const settings = require('./config/settings');
const express = require('express');
var routeProvider = require('./routes/provider');

/** Extract the necesarry constants */
const { PORT, HOST, FRONTEND_DIR } = settings;

/** App */
const app = express();

/** Static files are served through frontend  */
app.use(express.static(FRONTEND_DIR));

/** Load our routes into the app */
routeProvider(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);