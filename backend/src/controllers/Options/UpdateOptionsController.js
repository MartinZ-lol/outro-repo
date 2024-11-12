const ProductOptionsModel = require('../../models/ProductOptionsModel');
const ProductModel = require('../../models/ProductModel');

module.exports = async (request, response) => {
    let { id, optionId } = request.params;
    let { title, shape, radius, type, values } = request.body;

    try {

        let product = await ProductModel.findOne({
            where: { id }
        });

        /*if (!product) {
            return response.status(404).json({ message: 'Produto não encontrado' });
        }*/


        const updatedOption = await ProductOptionsModel.update(
            {
                title,
                shape,
                radius,
                type,
                values
            },
            {
                where: {
                    product_id: id, 
                    id: optionId     
                }
            }
        );

        /*if (updatedOption[0] === 0) {
            return response.status(404).json({ message: 'Opção não encontrada' });
        }*/

        return response.status(204).end();
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Erro ao atualizar opção de produto' });
    }
};
