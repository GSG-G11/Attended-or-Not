const connection = require('../config/connection');

const getData = () =>{ return connection.query('SELECT * FROM members;')};

module.exports = getData;
