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
    const user = await service.login(email, password, res);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, _, next) => {
  try {
    const cookies = req.headers.cookie;
    console.log(cookies);
    const user = await service.verifyToken(cookies);
    req.sub = user.sub;
  } catch (error) {
    next(error);
  }
  next();
};

const getUser = async (req, res, next) => {
  try {
    const userId = req.sub;
    const user = await service.getUser(userId);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
