const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const ProductImageModel = connection.define("ProductImageModel", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
            model: {
                tableName: "product"
            },
            key: 'id'
        }
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    url:{
        type: DataTypes.VIRTUAL,
        get() {
            return `http://localhost:3000/public/${this.path}`
        }
    }
}, {
    tableName: 'product_image'
});


module.exports = ProductImageModel;