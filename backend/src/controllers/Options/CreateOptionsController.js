const ProductOptionsModel = require('../../models/ProductOptionsModel');
const ProductModel = require('../../models/ProductModel');

module.exports = async (request, response) => {
    let { title, shape, radius, type, values } = request.body;
    let product_id = request.params.id;

    try {

        const product = await ProductModel.findByPk(product_id);
        if (!product) {
            return response.status(404).json({ message: 'Produto não encontrado' });
        }


        const option = await ProductOptionsModel.create({
            product_id, title, shape, radius, type, values
        });


        return response.status(201).json(option);
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Erro ao criar opção de produto' });
    }
}