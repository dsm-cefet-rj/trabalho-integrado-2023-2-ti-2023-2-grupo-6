const { Router } = require('express');
const router = Router();
const auth = require("../middlewares/auth")
const StudentController = require("../controllers/StudentController")

//getStudent tem q ter auth

router
  .get('/students', auth, StudentController.getStudents)
  .post('/students', StudentController.createStudent)
  .get('/students/:studentId', StudentController.getStudent)

module.exports = router;