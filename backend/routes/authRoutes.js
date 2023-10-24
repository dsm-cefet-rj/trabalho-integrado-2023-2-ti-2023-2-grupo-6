const {Router} = require('express');
const router = Router();
const AuthController = require("../controllers/AuthController");

router
.post("/login", AuthController.login)

module.exports = router;