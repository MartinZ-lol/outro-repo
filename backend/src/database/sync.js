const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const CategoryModel = require('../models/CategoryModel');
const ProductCategoryModel = require('../models/ProductCategoryModel');
const ProductOptionsModel = require('../models/ProductOptionsModel');
const UserModel = require('../models/UserModel');

async function execute() {
    await ProductModel.sync();
    await ProductImageModel.sync({alter: true});
    await CategoryModel.sync();
    await ProductCategoryModel.sync({alter: true}); 
    await ProductOptionsModel.sync();
    await UserModel.sync({alter: true});  
}

execute();
