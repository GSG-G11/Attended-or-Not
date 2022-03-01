const compression = require('compression');
const express = require('express');
require('env2')('.env');

const { join } = require('path');

const router = require('./routes');

const app = express();

app.use(compression());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', 3000);
module.exports = app;
