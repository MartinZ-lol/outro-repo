const ProductModel = require('../src/models/ProductModel');
const ProductOptionsModel = require('../src/models/ProductOptionsModel');

ProductModel.hasMany(ProductOptionsModel, {foreignKey: "product_id", as: 'options'});

async function execute() {
    let product = await ProductModel.findAll({
        include: {
            model: ProductOptionsModel,
            as: "options"
        }
    });

    console.log(product[2].options[0]);
}

execute();