const express = require('express');
const getDataFromDB = require('../database/queries/getData');

const router = express.Router();

const getDataFromPublic = require('../controllers/getData');
const path =  require('path')
router.post('/add_user', getDataFromPublic);

router.post('/add_program' , getDataFromPublic)
module.exports = router;
