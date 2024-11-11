const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllOptionsController =require('../controllers/Options/AllOptionsController');
const CreateOptionsController = require('../controllers/Options/CreateOptionsController');


publicRoutes.get('/options', AllOptionsController);
publicRoutes.post('/products/:id/options', CreateOptionsController);


module.exports = [publicRoutes, privateRoutes];