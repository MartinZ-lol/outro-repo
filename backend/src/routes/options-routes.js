const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllOptionsController =require('../controllers/Options/AllOptionsController');
const CreateOptionsController = require('../controllers/Options/CreateOptionsController');
const UpdateOptionsController = require('../controllers/Options/UpdateOptionsController');
const DeleteOptionsController = require('../controllers/Options/DeleteOptionsController');


publicRoutes.get('/options', AllOptionsController);
publicRoutes.post('/products/:id/options', CreateOptionsController);
privateRoutes.put('/products/:id/options/:optionId', UpdateOptionsController);
privateRoutes.delete('/products/:id/options/:optionId', DeleteOptionsController);


module.exports = [publicRoutes, privateRoutes];