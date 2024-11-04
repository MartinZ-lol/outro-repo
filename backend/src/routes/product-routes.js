const express = require('express');

const router = express.Router();
const AllProductsController = require('../controllers/Products/AllProductsController');
const CreateController = require('../controllers/Products/CreateController');
const UpdateProductController = require('../controllers/Products/UpdateProductController');
const DeleteProductController = require('../controllers/Products/DeleteProductController');
//const GetBySlug = require('../controllers/Products/GetBySlug');

const beforeListAll = (request, response, next) => {
    console.log('Middleware');
    next();
}

router.use(beforeListAll);

router.get('/products', AllProductsController);
//router.get('/products/:slug', GetBySlug);
router.post('/products', CreateController);
router.put('/products/:id', UpdateProductController);
router.delete('/products/:id', DeleteProductController);

module.exports = router;