const express = require('express');
const AllUserController = require('../controllers/User/AllUserController');
const CreateUserController = require('../controllers/User/CreateUserController');

let router = express.Router();

router.get('/users', AllUserController);
router.post('/users', CreateUserController);


module.exports = router;