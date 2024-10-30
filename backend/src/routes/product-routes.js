const express = require('express');
const AllProductsController = require('../controllers/Products/AllProductsController');
const CreateController = require('../controllers/Products/CreateController');

let router = express.Router();

router.get('/products', AllProductsController);
router.post('/products', CreateController);

module.exports = router;