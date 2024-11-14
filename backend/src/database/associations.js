const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const ProductOptionsModel = require('../models/ProductOptionsModel');
const CategoryModel = require('../models/CategoryModel');
const ProductCategoryModel = require('../models/ProductCategoryModel');

ProductModel.hasMany(ProductImageModel, {
    foreignKey: 'product_id',
    as: 'images'
});

ProductModel.hasMany(ProductOptionsModel, {
    foreignKey: 'product_id',
    as: 'options'

});

ProductModel.belongsToMany(CategoryModel, {
    foreignKey: "category_id",
    otherKey: "product_id",
    through: 'product_category',
    as: 'categories',
    timestamps: false
});

ProductModel.hasMany(ProductCategoryModel, {
    foreignKey: 'product_id',
    as: 'category'

});

CategoryModel.hasMany(ProductCategoryModel, {
    foreignKey: 'category_id',
    as: 'category_ids'

});