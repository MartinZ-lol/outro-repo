const privateRoutes = require('../routes/private-routes');
const publicRoutes = require('../routes/public-routes');

const AllCategoryController = require('../controllers/Category/AllCategoryController');
const CreateCategoryController = require('../controllers/Category/CreateCategoryController');


publicRoutes.get('/categories', AllCategoryController);
privateRoutes.post('/categories', CreateCategoryController)

module.exports = [publicRoutes, privateRoutes];
