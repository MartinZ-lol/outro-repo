const ProductOptionsModel = require('../../models/ProductOptionsModel');
const ProductModel = require('../../models/ProductModel');

module.exports = async (request, response) => {
    let { id, optionId } = request.params;

    try {

        let product = await ProductModel.findOne({
            where: { id }
        });



        const deletedOption = await ProductOptionsModel.destroy({
            where: {
                product_id: id,
                id: optionId     
            }
        });


        return response.status(204).end();
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Erro ao deletar opção de produto' });
    }
};