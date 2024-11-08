const { request, response } = require('express');
const CategoryModel = require('../../models/CategoryModel');

module.exports = async (request, response) => {
    let count = await CategoryModel.destroy({
        where: {
            id: request.params.id
        }
    });
    
    return response.status(204).end();
}