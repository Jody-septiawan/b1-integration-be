const express = require("express");
const router = express.Router();

const { register, login, checkAuth } = require("../../controllers/auth");
const {
  registerValidation,
  loginValidation,
  tokenValidation,
} = require("../../middlewares/authMiddlewares");

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);
router.get("/check", tokenValidation, checkAuth);

module.exports = router;
