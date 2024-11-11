const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllUserController = require('../controllers/User/AllUserController');
const CreateUserController = require('../controllers/User/CreateUserController');
const userEncrypt = require('../middleware/user-encrypt');
const CreateTokenController = require('../controllers/User/CreateTokenController');
const GetById = require('../controllers/User/GetById');
const UpdateUserController = require('../controllers/User/UpdateUserController');
const DeleteUserController = require('../controllers/User/DeleteUserController');


publicRoutes.get('/users', AllUserController);
publicRoutes.get('/users/:id', GetById);
publicRoutes.post('/users', userEncrypt, CreateUserController);
publicRoutes.post('/users/token', CreateTokenController);
privateRoutes.put('/users/:id', UpdateUserController);
privateRoutes.delete('/users/:id', DeleteUserController);

module.exports = [publicRoutes, privateRoutes];