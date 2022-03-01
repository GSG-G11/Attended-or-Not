require('env2')('.env');
const { join } = require('path');
const express = require('express');

const router = express.Router();
const compression = require('compression');

const app = express();

app.use(compression());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', 3000);
app.use(router);
module.exports = { router, app };
