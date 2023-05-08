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
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const headers = req.headers["authorization"];
    const user = await service.verifyToken(headers);
    req.sub = user.sub; // Aquí asignamos el ID del usuario a req.sub
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const userId = req.sub;
    const user = await service.getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
