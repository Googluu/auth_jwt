const { Router } = require("express");

const { signup } = require("../controllers/user.controller");
const checkEmailExists = require("../middlewares/checkEmailExists");

const router = Router();

router.post("/signup", checkEmailExists, signup);

module.exports = router;
