const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');


const AllProductsController = require('../controllers/Products/AllProductsController');
const CreateController = require('../controllers/Products/CreateController');
const UpdateProductController = require('../controllers/Products/UpdateProductController');
const DeleteProductController = require('../controllers/Products/DeleteProductController');
const GetBySlug = require('../controllers/Products/GetBySlug');


publicRoutes.get('/products', AllProductsController);
publicRoutes.get('/products/:slug', GetBySlug);
privateRoutes.post('/products', CreateController);
privateRoutes.put('/products/:id', UpdateProductController);
privateRoutes.delete('/products/:id', DeleteProductController);

module.exports = [publicRoutes, privateRoutes];