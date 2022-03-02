const {join} = require('path');
const express = require('express');
const getPrograms = require('../controllers/getPrograms');
const router = express.Router();
const {getDataFromProgram ,getDataFromUser} = require('../controllers/getData');
const { notFoundError, serverError } = require('../controllers/error');
const { removeMember } = require('../controllers/removeMember');

router.use(express.static(join(__dirname, '..','..', 'public')));


router.post('/add_user', getDataFromUser);

router.post('/add_program', getDataFromProgram);

router.get('/get_program', getPrograms);

router.delete('/member', removeMember);


router.use(notFoundError);

router.use(serverError);

module.exports = router;
