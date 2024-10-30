const ProductModel = require('../../models/ProductModel');

module.exports = async(request, response) => {
    let products = await ProductModel.findAll();
    return response.json(products);
}