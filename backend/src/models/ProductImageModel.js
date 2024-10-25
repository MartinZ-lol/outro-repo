const connection = require('../database/connection')
const {Datatypes, DataTypes} = require('sequelize')

const productImagemModel = connection.define("ProductImagemModel", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    }
}, {
    tableName: 'product_image'
});


module.exports = productImagemModel;