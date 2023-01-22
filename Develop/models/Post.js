const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init({
    image: {
        type: DataTypes.STRING,
    },
    createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn("now")
    },
    userName: {
        type: DataTypes.STRING,
        // defaultValue: userName // add correct data here
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
});

module.exports = Post