const sequelize = require('../config/connection');
const { User, Pet, Post } = require('../models');

const {makeUsers, makePets, makePosts } = require("./seedDataGenerator")

const seedDatabase = async () => {

  // console.log(data.users)
  await sequelize.sync({ force: true });

  const userObjs = makeUsers(4);
  const users = await User.bulkCreate(userObjs, {
    individualHooks: true,
    returning: true,
  });

  const petObjs = makePets(20, users)
  const pets = await Pet.bulkCreate(petObjs)

  const postObjs = makePosts(2, users, pets)
  const posts = await Post.bulkCreate(postObjs)

  // console.log(posts)

  process.exit(0);
};

seedDatabase();
