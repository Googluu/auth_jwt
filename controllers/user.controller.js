const UserService = require("../services/user.services");

const service = new UserService();

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userData = {
      name,
      email,
      password,
    };
    const user = await service.signup(userData);
    res.status(201).json({ message: user });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.login(email, password);
    return res.status(200).json({
      //   user,
      message: "Successfully Logged In",
    });
  } catch (error) {
    next(error);
  }
};

exports.signup = signup;
exports.login = login;
