const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');

ProductModel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
})

module.exports = async (request, response) => {
    let products = await ProductModel.findAll({
        include: {
            attributes: ['id', 'url', 'path'],
            model: ProductImageModel,
            as: 'images'
        }
    });
    return response.json(products);
}