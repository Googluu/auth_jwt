const { Router } = require("express");

const { signup, login } = require("../controllers/user.controller");
const checkEmailExists = require("../middlewares/checkEmailExists");

const router = Router();

router.post("/signup", checkEmailExists, signup);
router.post("/login", login);

module.exports = router;
