const User = require("../model/User");

class UserService {
  constructor() {}

  async signup(data) {
    const newUser = new User(data);
    const response = await newUser.save();
    return response;
  }
}

module.exports = UserService;
