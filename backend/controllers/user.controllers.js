const UserService = require("../services/user.services");

exports.saveUser = async function (req, res, next) {
  try {
    const user = await UserService.saveUser(req.body, res);
    res.json({ status: 200, data: user, message: "Saved" });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async function (req, res, next) {
  try {
    const user = await UserService.getUser(req.body, res);
    res.json({ status: 200, data: user, message: "Login" });
  } catch (error) {
    next(error);
  }
};
