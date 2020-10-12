const router = require("express").Router();
const User = require("../Controller/User_Controller");

router.get("/login", User.login);

module.exports = router;
