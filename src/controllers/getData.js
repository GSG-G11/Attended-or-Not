const postData = require('../database/queries/postData');
const getDataFromDB = require('../database/queries/getData');
const getData = (req, res) => {
  postData(req.body);
  getDataFromDB()
    .then((data) => {
      console.log(data)
      res.json(data.rows);
    })
    .catch(console.log);
};

module.exports = getData;
