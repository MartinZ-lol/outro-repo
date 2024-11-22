const ProductImageModel = require('../../models/ProductImageModel');

module.exports = async (request, response) => {
    const {id, imageId } = request.params;

    try {
        const image = await ProductImageModel.findOne({
            where: {
                id: imageId,
                product_id: id
            }
        });

        if (!image) {
            return response.status(404).json({ message: 'Imagem não encontrada ou não associada ao produto' });
        }

        await ProductImageModel.destroy({
            where: {
                id: imageId,
                product_id: id
            }
        });

        return response.status(204).end();
    } catch (error) {
        console.error('Erro ao deletar a imagem:', error);
        return response.status(500).json({ message: 'Erro ao deletar a imagem do produto' });
    }
};
