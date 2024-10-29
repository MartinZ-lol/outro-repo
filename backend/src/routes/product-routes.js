const express = require('express');
const AllProductsController = require('../controllers/Products/AllProductsController');

let router = express.Router();

router.get('/products', AllProductsController);

module.exports = router;