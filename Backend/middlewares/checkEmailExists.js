const User = require("../models/User");

const checkEmailExists = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "El email ya está en uso" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error en el servidor" });
  }
};

module.exports = checkEmailExists;
