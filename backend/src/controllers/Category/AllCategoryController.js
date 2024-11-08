const CategoryModel = require('../../models/CategoryModel');


module.exports = async (request, response) => {
    let category = await CategoryModel.findAll();
    return response.json(category)
}