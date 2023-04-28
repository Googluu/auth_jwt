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
    console.log(error);
  }
};

exports.signup = signup;
