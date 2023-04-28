const bcrypt = require("bcrypt");
const { unauthorized } = require("@hapi/boom");

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

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw unauthorized();
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw unauthorized();
    return user;
  }
}

module.exports = UserService;
