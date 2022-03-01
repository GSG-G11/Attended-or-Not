const { Pool } = require('pg');
require('env2')('.env');

let dbURL = '';

if (process.env.NODE_ENV === 'test') dbURL = process.env.DB_URL_TEST;
if (process.env.NODE_ENV === 'dev') dbURL = process.env.DB_URL;
if (process.env.NODE_ENV === 'prod') dbURL = process.env.DB_URL_PROD;

if (!dbURL) throw new Error('no db url');

const option = {
  connectionString: dbURL,
  ssl: false,
};

module.exports = new Pool(option);
