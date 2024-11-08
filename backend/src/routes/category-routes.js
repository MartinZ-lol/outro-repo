const privateRoutes = require('../routes/private-routes');
const publicRoutes = require('../routes/public-routes');

const AllCategoryController = require('../controllers/Category/AllCategoryController');
const CreateCategoryController = require('../controllers/Category/CreateCategoryController');
const GetBySlug = require('../controllers/Category/GetBySlug');
const UpdateCategoryController = require('../controllers/Category/UpdateCategoryController');
const DeleteCategoryController = require('../controllers/Category/DeleteCategoryController');

publicRoutes.get('/categories', AllCategoryController);
publicRoutes.get('/categories/:slug', GetBySlug);
privateRoutes.post('/categories', CreateCategoryController);
privateRoutes.put('/categories/:id', UpdateCategoryController);
privateRoutes.delete('/categories/:id', DeleteCategoryController);

module.exports = [publicRoutes, privateRoutes];
