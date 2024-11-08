const CategoryModel = require('../../models/CategoryModel');

module.exports = async (request, response) => {
    let {body} = request;

    await CategoryModel.update(body, {
        where: {
            id: request.params.id
        }
    });

    return response.status(204).end();
}