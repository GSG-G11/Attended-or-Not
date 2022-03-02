const connection = require('../config/connection');

const getData = () =>{ return connection.query('SELECT * FROM program;')};

module.exports = getData;
