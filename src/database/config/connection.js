const { Pool } = require('pg');
require('env2')('config.env');

let dbURL = '';

if (process.env.NODE_ENV === 'test') dbURL = process.env.DB_URL_TEST;
if (process.env.NODE_ENV === 'dev') dbURL = process.env.DB_URL;
if (process.env.NODE_ENV === 'production') dbURL = process.env.DATABASE_URL;

if (!dbURL) throw new Error('no db url');

const option = {
  connectionString:
    'postgres://vcnoaqwlwlassg:c377c431d23e915f7fff54ea8f17f973133feea2870e96118a644a49f59d446c@ec2-35-153-35-94.compute-1.amazonaws.com:5432/d8b9gum3flpf9t',
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(option);
