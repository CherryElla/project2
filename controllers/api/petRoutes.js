const router = require("express").Router();
const { User, Pet } = require("../../models");
const sequelize = require("../../config/connection");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "post_text", "title", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
      model: Pet,
        attributes: ["id", "name", "breed", "age", "gender", "user_id"],
        },
    ],
  })
    .then((petData) => res.json(petData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;