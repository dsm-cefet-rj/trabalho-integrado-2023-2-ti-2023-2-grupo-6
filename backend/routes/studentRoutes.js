const {Router} = require('express');
const router = Router();
const auth = require("../middlewares/auth")
const StudentController = require("../controllers/StudentController")

router
.get('/students', auth, StudentController.getStudents)
.post('/students', StudentController.createStudent)

module.exports = router;