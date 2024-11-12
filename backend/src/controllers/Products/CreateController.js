const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');
const ProductOptionsModel = require('../../models/ProductOptionsModel');
const {saveByUrl} = require('../../services/product-images');

module.exports = async (request, response) => {
    let {
        name,
        slug,
        price,
        enabled,
        price_with_discount,
        description,
        stock
    } = request.body;

    let product;
    
    try {
        product = await ProductModel.create({
            name, slug, price, description, stock,enabled,price_with_discount
        });   
    } catch(error) {
        response.status(400);
        return response.json({
            message: "Erro ao criar o produto"
        })
    }

    
    try {
        let images = [];
        for (let url of request.body.images) {
            let {relativePath} = await saveByUrl({url, slug});
            images.push({
                product_id: product.id,
                path: relativePath
            });
        }
        images = await ProductImageModel.bulkCreate(images);
        product.setDataValue('images', images)
        response.status(201);
    } catch (error) {
        console.log(error.message);
        response.status(400);
        return response.json({
            message: "Erro ao salvar imagens no produto" + product.id
        });
    }


    try {

        let options = [];  
        for(let option of request.body.options) {
            console.log('aqui');         
            options.push({
                product_id: product.id,
                title: option.title,
                shape: option.shape,
                radius: option.radius,
                type: option.type,
                values: option.values.join()
            }); 
        }
        options = await ProductOptionsModel.bulkCreate(options)
        product.setDataValue('options', options)
        response.status(201);
        
        return response.json(product);
    } catch (error) {
        console.log(error.message);
        
        response.status(400);
        return response.json({
            message: "Erro em criar opções"
        });
    }
}