const ProductModel = require('../../models/ProductModel');
const ProductOptionsModel = require('../../models/ProductOptionsModel');


module.exports = async (request, response) => {
    let product = await ProductModel.findOne({
        where: {
            id: request.params.id
        }
    });

    let options = []
    try {
        
        
        for(let product of request.body) {
            options.push({
                product_id: request.params.id,
            });
        }
    } catch(error) {
        response.status(400);
        return response.json({
            message: "Errado no options"
        });
    }

    options = await ProductOptionsModel.bulkCreate(options);
    response.status(201);
    return response.json(options)


    // let {
    //     title,
    //     shape,
    //     radius,
    //     type,
    //     values
    // } = request.body;
   
    // let product_id = request.params.id
   
    // let option;
  
    //     option = await ProductOptionsModel.create({
    //        product_id, title, shape, radius, type, values
    //     });
        
    // response.status(201);
    // return response.json(option)
}