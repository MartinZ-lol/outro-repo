const CategoryModel = require('../../models/CategoryModel');


module.exports = async (request, response) => {
    let {body} = request;
    let category = await CategoryModel.create(body);
    response.status(201);
    return response.json(category);
}