const express = require('express');
const getDataFromDB = require('../database/queries/getData');

const router = express.Router();

const getDataFromPublic = require('../controllers/getData');

router.post('/add_user', getDataFromPublic);

module.exports = router;
