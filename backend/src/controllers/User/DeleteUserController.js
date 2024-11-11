const UserModel = require('../../models/UserModel');

module.exports = async (request, response) => {
    await UserModel.destroy({
        where: {
            id: request.params.id
        }
    });

    return response.status(204).end();
}