const privateRoutes = require('../routes/private-routes');
const publicRoutes = require('../routes/public-routes');

const AllCategoryController = require('../controllers/Category/AllCategoryController');
const CreateCategoryController = require('../controllers/Category/CreateCategoryController');
const GetById = require('../controllers/Category/GetById');
const UpdateCategoryController = require('../controllers/Category/UpdateCategoryController');
const DeleteCategoryController = require('../controllers/Category/DeleteCategoryController');

publicRoutes.get('/categories', AllCategoryController);
publicRoutes.get('/categories/:id', GetById);
privateRoutes.post('/categories', CreateCategoryController);
privateRoutes.put('/categories/:id', UpdateCategoryController);
privateRoutes.delete('/categories/:id', DeleteCategoryController);

module.exports = [publicRoutes, privateRoutes];
