const { Router } = require("express");

const {
  signup,
  login,
  verifyToken,
  // getUser,
} = require("../controllers/user.controller");
const checkEmailExists = require("../middlewares/checkEmailExists");

const router = Router();

router.post("/signup", checkEmailExists, signup);
router.post("/login", login);
router.get("/user", verifyToken);

module.exports = router;
