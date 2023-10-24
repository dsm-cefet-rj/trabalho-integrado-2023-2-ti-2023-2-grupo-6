const {Router} = require('express');
const router = Router();
const AuthStudentController = require("../controllers/AuthStudentController")
const AuthTeacherController = require("../controllers/AuthTeacherController")
const AuthController = require("../controllers/AuthController");

router
.post("/login", AuthController.login)
.post("/teacher/login", AuthTeacherController.login)
.post("/student/login", AuthStudentController.login)

module.exports = router;