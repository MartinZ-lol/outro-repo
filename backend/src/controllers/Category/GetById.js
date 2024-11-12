const CategoryModel = require('../../models/CategoryModel');
const ProductModel = require('../../models/ProductModel');


module.exports = async (request, response) => {
    let category = await CategoryModel.findOne({
        where: {
            id: request.params.id
        }
        
    });
    return response.json(category);
}