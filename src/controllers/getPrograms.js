const getDataFromDB = require('../database/queries/getData');
const getPrograms = (req, res) => getDataFromDB().then((data) => res.send(data.rows));

module.exports = getPrograms;
