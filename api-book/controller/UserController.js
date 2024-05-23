const User = require("../model/UserSchema");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    let user = new User(req.body);
    await user.save();

    res.status(200).send({
      success: true,
      message: "user created..",
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllUser = async (req, res) => {
  try {
    let users = await User.find({});
    console.log(users);

    res.status(200).send({
      message: "user fetched",
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send({
      message: "user deleted",
      data: "",
    });
  } catch (err) {
    res.status(500).send({
      success: true,
      message: "Error ",
      err,
    });
  }
};

module.exports = {
  createUser,
  getAllUser,
  deleteUser,
};
