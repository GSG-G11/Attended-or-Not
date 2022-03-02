const express = require('express');
const getPrograms = require('../controllers/getPrograms');
const router = express.Router();

const { getDataFromProgram, getDataFromUser } = require('../controllers/getData');
const { removeMember } = require('../controllers/removeMember');

router.post('/add_user', getDataFromUser);

router.post('/add_program', getDataFromProgram);

router.get('/get_program', getPrograms);

router.delete('/member', removeMember);

module.exports = router;
