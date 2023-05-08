const UserService = require("../services/user.services");

exports.saveUser = async function (req, res, next) {
  try {
    const user = await UserService.saveUser({});
    res.json({ status: 200, data: user, message: "Saved" });
  } catch (error) {
    next(error);
  }
};
