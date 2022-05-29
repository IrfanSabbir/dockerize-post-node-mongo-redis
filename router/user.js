const express = require("express");
const router = express.Router();

const userController = require('../controller/user');

router.post("/login",userController.logIn);
router.post("/signup",userController.signUp);


module.exports = router;