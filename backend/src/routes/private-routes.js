const {Router} = require('express');
const auth = require('../middleware/auth');

const router = Router();

router.use(auth);

module.exports = router;