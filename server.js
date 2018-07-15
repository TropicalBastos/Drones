'use strict';

const express = require('express');

/** Constants */
const PORT = 8080;
const HOST = '0.0.0.0';
const FRONTEND_DIR = __dirname + '/frontend';
const INDEX_PATH = __dirname + '/frontend/index.html';

/** App */
const app = express();

/** Static files are served through frontend  */
app.use(express.static(FRONTEND_DIR));

app.get('/', (req, res) => {
  res.sendFile(INDEX_PATH);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);