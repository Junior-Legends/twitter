const router = require("express").Router();
const User = require("../Controllers/User_Controller");

router.get("/login", User.login);

module.exports = router;
