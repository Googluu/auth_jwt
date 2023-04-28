require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  Url: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = { config };
