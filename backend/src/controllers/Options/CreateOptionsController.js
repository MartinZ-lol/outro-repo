const ProductOptionsModel = require('../../models/ProductOptionsModel');
const ProductModel = require('../../models/ProductModel');

module.exports = async (request, response) => {
    let product = await ProductModel.findOne({
        where: {
            id: request.params.id
        }
    });
    let options = [];
    try{ 

        
        for(let option of request.body) {
            console.log(request.body);
            options.push({
                product_id: request.params.id,
                title: option.title,
                shape: option.shape,
                radius: option.radius,
                type: option.type,
                values: option.values.join()
            });
        }
    } catch(error) {
        response.status(400);
                return response.json({
                    message: "Erro em criar opções"
                });
    }

        if(options.length > 0) {
                await ProductOptionsModel.bulkCreate(options)
                response.status(201);
                return response.json(options);
            } else {
                response.status(400);
                return response.json({
                    message: "Erro em criar opções"
                });
                
            }
 
    }