const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { unauthorized, notFound } = require("@hapi/boom");

const User = require("../models/User");
const { config } = require("../config");

class UserService {
  constructor() {}

  async signup(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = new User({
      ...data,
      password: hash,
    });
    const response = await newUser.save();
    return response;
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw unauthorized();
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw unauthorized();
    const payload = {
      sub: user._id,
    };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1hr" });
    return {
      user,
      token,
    };
  }

  async verifyToken(headers) {
    const token = headers.split(" ")[1];
    if (!token) throw notFound("Token not found");
    const user = jwt.verify(token, config.jwtSecret);
    if (!user) throw unauthorized();
    return user;
  }

  async getUser(userId) {
    const user = await User.findById(userId, "-password");
    if (!user) throw notFound("User not found");
    return user;
  }
}

module.exports = UserService;
