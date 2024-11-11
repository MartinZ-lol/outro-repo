const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');


const AllProductsController = require('../controllers/Products/AllProductsController');
const CreateController = require('../controllers/Products/CreateController');
const UpdateProductController = require('../controllers/Products/UpdateProductController');
const DeleteProductController = require('../controllers/Products/DeleteProductController');
const GetBySlug = require('../controllers/Products/GetBySlug');
const ListImagesController = require('../controllers/Products/ListImagesController');
const CreateImagesController = require('../controllers/Products/CreateImagesController');
const UpdateImagesController = require('../controllers/Products/UpdateImagesController');
const DeleteImagesController = require('../controllers/Products/DeleteImagesController');


publicRoutes.get('/products', AllProductsController);
publicRoutes.get('/products/:slug', GetBySlug);
privateRoutes.post('/products', CreateController);
privateRoutes.put('/products/:id', UpdateProductController);
privateRoutes.delete('/products/:id', DeleteProductController);
publicRoutes.get('/products/:id/images', ListImagesController);
privateRoutes.post('/products/:id/images', CreateImagesController);
privateRoutes.put('/products/:id/images/:imageId', UpdateImagesController);
privateRoutes.delete('/images/:id', DeleteImagesController);


module.exports = [publicRoutes, privateRoutes];