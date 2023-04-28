const bcrypt = require("bcrypt");

const User = require("../models/User");

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
}

module.exports = UserService;
