const User = require('./User');
const Pet = require('./Pet');
const Post = require('./Post');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pet.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: "user_id"
})

module.exports = { User, Pet, Post };
