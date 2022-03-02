const path = require('path');
const express = require('express');
const getPrograms = require('../controllers/getPrograms');
const router = express.Router();

const {getDataFromProgram ,getDataFromUser} = require('../controllers/getData');

router.post('/add_user', getDataFromUser);

router.post('/add_program',getDataFromProgram );

router.get('/get_program', getPrograms);

module.exports = router;
