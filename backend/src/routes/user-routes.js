const express = require('express');
const AllUserController = require('../controllers/User/AllUserController');
const CreateUserController = require('../controllers/User/CreateUserController');
const userEncrypt = require('../middleware/user-encrypt');
let router = express.Router();

router.get('/users', AllUserController);
router.post('/users', userEncrypt, CreateUserController);


module.exports = router;