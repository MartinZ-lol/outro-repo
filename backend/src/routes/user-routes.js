const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllUserController = require('../controllers/User/AllUserController');
const CreateUserController = require('../controllers/User/CreateUserController');
const userEncrypt = require('../middleware/user-encrypt');
const CreateTokenController = require('../controllers/User/CreateTokenController');


publicRoutes.get('/users', AllUserController);
privateRoutes.post('/users', userEncrypt, CreateUserController);
publicRoutes.post('/users/token', userEncrypt, CreateTokenController);


module.exports = [publicRoutes, privateRoutes];