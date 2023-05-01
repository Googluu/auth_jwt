const UserService = require("../services/user.services");
const jwt = require("jsonwebtoken");
const { unauthorized, notFound } = require("@hapi/boom");

const { config } = require("../config");

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
      user,
      message: "Successfully Logged In",
    });
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const headers = req.headers["authorization"];
    const user = await service.verifyToken(headers);
  } catch (error) {
    next(error);
  }
};

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
