const connection = require('../config/connection');

const getData = () => connection.query('SELECT * FROM program;');

module.exports = getData;
