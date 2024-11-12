const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');
const ProductOptionsModel = require('../../models/ProductOptionsModel');


module.exports = async (request, response) => {
    let products = await ProductModel.findAll({
        where:{
            enabled: true
        },
        include: [{
            attributes: ['id', 'url', 'path'],
            model: ProductImageModel, 
            as: 'images',
        },
        {
            attributes: ['id', 'title', 'shape', 'radius', 'type', 'values'],
            model: ProductOptionsModel,
            as: 'options'
        }]
    });
    return response.json(products);
}