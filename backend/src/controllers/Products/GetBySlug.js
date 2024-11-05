const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');

ProductModel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images2'
})

module.exports = async (request, response) => {
    let products = await ProductModel.findAll({
        where:{
            slug: request.params.slug
        },
        include: {
            attributes: ['id', 'url', 'path'],
            model: ProductImageModel,
            as: 'images2'
        }
    });
    return response.json(products);
}