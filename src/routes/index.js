const path = require('path');
const express = require('express');
const getPrograms = require('../controllers/getPrograms');
const router = express.Router();

const getDataFromPublic = require('../controllers/getData');

router.post('/add_user', getDataFromPublic);

router.post('/add_program', getDataFromPublic);

router.get('/get_program', getPrograms);

module.exports = router;
