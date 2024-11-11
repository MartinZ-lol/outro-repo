const ProductOptionsModel = require('../../models/ProductOptionsModel');

module.exports = async (request, response) => {
    let options = await ProductOptionsModel.findAll();
    return response.json(options);
}