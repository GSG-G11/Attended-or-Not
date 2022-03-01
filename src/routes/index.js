const { router } = require('../app');
const getData = require('../controllers/getData');

router.post('/add_user', getData);
