const connection = require("../database/connection");
const {DataTypes} = require('sequelize');

const ProductOptionsModel = connection.define("ProductOptionsModel", {
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
    title: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    shape: {
        type: DataTypes.ENUM,
        values: ["square", "circle"],
        allowNull: false,
        defaultValue: "square"
    },
    radius: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM,
        values: ["text", "color"],
        allowNull: false,
        defaultValue: "text"
    },
    values: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'product_options'
});

module.exports = ProductOptionsModel;