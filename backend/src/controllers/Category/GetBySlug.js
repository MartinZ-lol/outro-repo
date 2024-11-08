const CategoryModel = require('../../models/CategoryModel');
const ProductModel = require('../../models/ProductModel');


module.exports = async (request, response) => {
    let category = await CategoryModel.findAll({
        where: {
            slug: request.params.slug
        }
        
    });
    return response.json(category);
}