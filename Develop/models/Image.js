const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Image extends Model {}

Image.init({
    type: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    uploadedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn("now")
    }
});
 
module.exports = Image