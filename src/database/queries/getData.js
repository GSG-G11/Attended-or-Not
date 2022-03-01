const connection = require('../config/connection');

const getData = () => connection.query('SELECT * FROM members;');

module.exports = getData;
