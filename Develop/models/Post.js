const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imageFileName: {
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.STRING,
        references:{
            model: "user",
            key: "id"
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    numLikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

},
{
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: 'post',
});

module.exports = Post